const mongoose = require('mongoose');

// Схема для элемента заказа
const orderItemSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  productName: { type: String, required: true },
  color: { type: String, default: null },
  memory: { type: String, default: null },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, default: '' }
}, { _id: false });

// Схема заказа
const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  userId: { type: String, default: null }, // Для зарегистрированных пользователей
  sessionId: { type: String, default: null }, // Для гостей
  
  // Товары в заказе
  items: [orderItemSchema],
  
  // Стоимость
  subtotal: { type: Number, required: true, min: 0 },
  total: { type: Number, required: true, min: 0 },
  
  // Информация о покупателе
  customer: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, default: '' },
    address: { type: String, default: '' }
  },
  
  // Статус заказа
  status: {
    type: String,
    enum: ['pending', 'reserved', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  
  // Платежная информация
  payment: {
    method: { type: String, default: '' },
    paymentId: { type: String, default: null },
    paidAt: { type: Date, default: null }
  },
  
  // Резервирование
  reservationId: { type: String, default: null },
  reservedAt: { type: Date, default: null },
  expiresAt: { type: Date, default: null },
  
  // Метаданные
  notes: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Индексы
orderSchema.index({ orderId: 1 });
orderSchema.index({ userId: 1 });
orderSchema.index({ sessionId: 1 });
orderSchema.index({ status: 1 });
orderSchema.index({ createdAt: -1 });
orderSchema.index({ expiresAt: 1 });

// Генерация уникального ID заказа
orderSchema.statics.generateOrderId = function() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `ORD-${timestamp}-${random}`;
};

module.exports = mongoose.model('Order', orderSchema);

