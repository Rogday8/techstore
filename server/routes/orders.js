const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');
const Reservation = require('../models/Reservation');
const config = require('../../config/config');

// Создать резервирование товаров (перед оплатой)
router.post('/reserve', async (req, res) => {
  const session = await Product.db.startSession();
  session.startTransaction();
  
  try {
    const { items, customer, sessionId } = req.body;
    
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, error: 'Корзина пуста' });
    }
    
    if (!customer || !customer.name || !customer.phone) {
      return res.status(400).json({ success: false, error: 'Необходимо указать имя и телефон' });
    }
    
    // Генерируем ID заказа и резервирования
    const orderId = Order.generateOrderId();
    const reservationId = Reservation.generateReservationId();
    
    // Проверяем доступность всех товаров и резервируем их
    const reservations = [];
    let subtotal = 0;
    const orderItems = [];
    
    for (const item of items) {
      const product = await Product.findOne({ id: item.productId }).session(session);
      
      if (!product) {
        throw new Error(`Товар с ID ${item.productId} не найден`);
      }
      
      if (!product.active) {
        throw new Error(`Товар "${product.name}" неактивен`);
      }
      
      // Проверяем доступность
      const availableStock = product.getAvailableStock(item.color, item.memory);
      if (availableStock < item.quantity) {
        throw new Error(`Недостаточно товара "${product.name}" на складе. Доступно: ${availableStock}, запрошено: ${item.quantity}`);
      }
      
      // Определяем цену
      let itemPrice = product.price;
      if (product.hasMemory && item.memory) {
        const memoryVariant = product.memoryOptions.get(item.memory);
        if (memoryVariant) {
          itemPrice = product.price + memoryVariant.price;
        }
      }
      
      // Резервируем товар
      await product.reserve(item.quantity, item.color, item.memory);
      
      // Создаем резервирование
      const expiresAt = new Date(Date.now() + config.reservationTimeout);
      const reservation = new Reservation({
        reservationId,
        orderId,
        productId: item.productId,
        color: item.color || null,
        memory: item.memory || null,
        quantity: item.quantity,
        expiresAt
      });
      
      await reservation.save({ session });
      reservations.push(reservation);
      
      // Формируем элемент заказа
      const productImage = product.hasColors && item.color
        ? product.colors.get(item.color)?.image || product.image
        : product.image;
      
      orderItems.push({
        productId: item.productId,
        productName: product.name,
        color: item.color || null,
        memory: item.memory || null,
        quantity: item.quantity,
        price: itemPrice,
        image: productImage
      });
      
      subtotal += itemPrice * item.quantity;
    }
    
    // Создаем заказ
    const order = new Order({
      orderId,
      sessionId: sessionId || null,
      items: orderItems,
      subtotal,
      total: subtotal, // Можно добавить доставку, налоги и т.д.
      customer,
      status: 'reserved',
      reservationId,
      reservedAt: new Date(),
      expiresAt: new Date(Date.now() + config.reservationTimeout)
    });
    
    await order.save({ session });
    
    await session.commitTransaction();
    
    res.json({
      success: true,
      orderId,
      reservationId,
      expiresAt: order.expiresAt,
      total: order.total
    });
  } catch (error) {
    await session.abortTransaction();
    console.error('Error reserving order:', error);
    res.status(400).json({ success: false, error: error.message });
  } finally {
    session.endSession();
  }
});

// Подтвердить заказ (после успешной оплаты)
router.post('/confirm', async (req, res) => {
  const session = await Product.db.startSession();
  session.startTransaction();
  
  try {
    const { orderId, paymentId, paymentMethod } = req.body;
    
    if (!orderId) {
      return res.status(400).json({ success: false, error: 'Не указан ID заказа' });
    }
    
    const order = await Order.findOne({ orderId }).session(session);
    
    if (!order) {
      return res.status(404).json({ success: false, error: 'Заказ не найден' });
    }
    
    if (order.status !== 'reserved') {
      return res.status(400).json({ success: false, error: 'Заказ уже обработан или отменен' });
    }
    
    // Проверяем, не истекло ли резервирование
    if (order.expiresAt && new Date() > order.expiresAt) {
      // Резервирование истекло, отменяем заказ
      await cancelOrder(orderId, session);
      return res.status(400).json({ success: false, error: 'Время резервирования истекло' });
    }
    
    // Подтверждаем резервирование товаров (списываем stock)
    for (const item of order.items) {
      const product = await Product.findOne({ id: item.productId }).session(session);
      if (product) {
        await product.confirmReservation(item.quantity, item.color, item.memory);
      }
    }
    
    // Обновляем статус заказа
    order.status = 'paid';
    order.payment.paymentId = paymentId || null;
    order.payment.method = paymentMethod || '';
    order.payment.paidAt = new Date();
    
    // Помечаем резервирования как подтвержденные
    await Reservation.updateMany(
      { orderId },
      { confirmed: true }
    ).session(session);
    
    await order.save({ session });
    
    await session.commitTransaction();
    
    res.json({
      success: true,
      orderId: order.orderId,
      status: order.status
    });
  } catch (error) {
    await session.abortTransaction();
    console.error('Error confirming order:', error);
    res.status(500).json({ success: false, error: error.message });
  } finally {
    session.endSession();
  }
});

// Отменить заказ
router.post('/cancel', async (req, res) => {
  try {
    const { orderId } = req.body;
    
    if (!orderId) {
      return res.status(400).json({ success: false, error: 'Не указан ID заказа' });
    }
    
    await cancelOrder(orderId);
    
    res.json({ success: true, message: 'Заказ отменен' });
  } catch (error) {
    console.error('Error cancelling order:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Получить заказ по ID
router.get('/:orderId', async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    
    if (!order) {
      return res.status(404).json({ success: false, error: 'Заказ не найден' });
    }
    
    res.json({ success: true, order });
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке заказа' });
  }
});

// Вспомогательная функция для отмены заказа
async function cancelOrder(orderId, session = null) {
  const order = await Order.findOne({ orderId }).session(session || null);
  
  if (!order) {
    throw new Error('Заказ не найден');
  }
  
  if (order.status === 'cancelled') {
    return; // Уже отменен
  }
  
  // Возвращаем товары в stock
  for (const item of order.items) {
    const product = await Product.findOne({ id: item.productId }).session(session || null);
    if (product) {
      await product.cancelReservation(item.quantity, item.color, item.memory);
    }
  }
  
  // Удаляем резервирования
  await Reservation.deleteMany({ orderId }).session(session || null);
  
  // Обновляем статус заказа
  order.status = 'cancelled';
  await order.save({ session });
}

module.exports = router;

