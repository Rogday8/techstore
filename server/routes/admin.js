const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');
const Reservation = require('../models/Reservation');
const multer = require('multer');
const path = require('path');
const fse = require('fs-extra');
const config = require('../../config/config');

// Middleware для проверки админ-доступа
const checkAdmin = (req, res, next) => {
  const adminToken = req.headers.authorization;
  // Простая проверка (в продакшене использовать JWT)
  if (adminToken === `Bearer ${config.adminPassword}`) {
    next();
  } else {
    res.status(401).json({ success: false, error: 'Недостаточно прав доступа' });
  }
};

// Настройка multer для загрузки изображений
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(config.imagesPath, 'products');
    fse.ensureDirSync(uploadPath);
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, 'product-' + uniqueSuffix + ext);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb(new Error('Только изображения разрешены!'));
    }
  }
});

// ========== ТОВАРЫ ==========

// Получить все товары (с пагинацией)
router.get('/products', checkAdmin, async (req, res) => {
  try {
    const { page = 1, limit = 50, category, search } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const query = {};
    if (category && category !== 'all') {
      query.category = category;
    }
    if (search) {
      query.$text = { $search: search };
    }
    
    const products = await Product.find(query)
      .sort({ id: 1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    const total = await Product.countDocuments(query);
    
    const formattedProducts = products.map(product => {
      const productObj = product.toObject();
      if (productObj.colors instanceof Map) {
        const colorsObj = {};
        productObj.colors.forEach((value, key) => {
          colorsObj[key] = value;
        });
        productObj.colors = colorsObj;
      }
      if (productObj.memoryOptions instanceof Map) {
        const memoryObj = {};
        productObj.memoryOptions.forEach((value, key) => {
          memoryObj[key] = value;
        });
        productObj.memoryOptions = memoryObj;
      }
      return productObj;
    });
    
    res.json({
      success: true,
      products: formattedProducts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке товаров' });
  }
});

// Создать новый товар
router.post('/products', checkAdmin, upload.array('images', 20), async (req, res) => {
  try {
    const productData = JSON.parse(req.body.product || '{}');
    
    // Получаем следующий ID
    const lastProduct = await Product.findOne().sort({ id: -1 });
    const nextId = lastProduct ? lastProduct.id + 1 : 1;
    
    // Обрабатываем загруженные изображения
    const uploadedImages = req.files ? req.files.map(file => {
      const relativePath = file.path.replace(/\\/g, '/');
      const projectRoot = path.join(__dirname, '../..').replace(/\\/g, '/') + '/';
      return relativePath.replace(projectRoot, '');
    }) : [];
    
    // Создаем товар
    const product = new Product({
      id: nextId,
      ...productData,
      images: uploadedImages.length > 0 ? uploadedImages : productData.images || [],
      image: uploadedImages[0] || productData.image || ''
    });
    
    await product.save();
    
    res.json({ success: true, product });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Обновить товар
router.put('/products/:id', checkAdmin, upload.array('images', 20), async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const productData = req.body.product ? JSON.parse(req.body.product) : req.body;
    
    const product = await Product.findOne({ id: productId });
    
    if (!product) {
      return res.status(404).json({ success: false, error: 'Товар не найден' });
    }
    
    // Обновляем изображения, если загружены новые
    if (req.files && req.files.length > 0) {
      const uploadedImages = req.files.map(file => {
        const relativePath = file.path.replace(/\\/g, '/');
        const projectRoot = path.join(__dirname, '../..').replace(/\\/g, '/') + '/';
        return relativePath.replace(projectRoot, '');
      });
      productData.images = uploadedImages;
      productData.image = uploadedImages[0];
    }
    
    // Обновляем поля
    Object.keys(productData).forEach(key => {
      if (key !== 'id' && key !== '_id' && key !== '__v') {
        product[key] = productData[key];
      }
    });
    
    product.updatedAt = new Date();
    await product.save();
    
    res.json({ success: true, product });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Удалить товар
router.delete('/products/:id', checkAdmin, async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await Product.findOne({ id: productId });
    
    if (!product) {
      return res.status(404).json({ success: false, error: 'Товар не найден' });
    }
    
    // Вместо удаления, помечаем как неактивный
    product.active = false;
    await product.save();
    
    res.json({ success: true, message: 'Товар деактивирован' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Обновить stock товара
router.put('/products/:id/stock', checkAdmin, async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const { stock, color, memory } = req.body;
    
    const product = await Product.findOne({ id: productId });
    
    if (!product) {
      return res.status(404).json({ success: false, error: 'Товар не найден' });
    }
    
    if (product.hasColors && color) {
      const colorVariant = product.colors.get(color);
      if (colorVariant) {
        colorVariant.stock = parseInt(stock);
        product.markModified('colors');
      }
    } else if (product.hasMemory && memory) {
      const memoryVariant = product.memoryOptions.get(memory);
      if (memoryVariant) {
        memoryVariant.stock = parseInt(stock);
        product.markModified('memoryOptions');
      }
    } else {
      product.stock = parseInt(stock);
    }
    
    await product.save();
    
    res.json({ success: true, product });
  } catch (error) {
    console.error('Error updating stock:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========== ЗАКАЗЫ ==========

// Получить все заказы
router.get('/orders', checkAdmin, async (req, res) => {
  try {
    const { page = 1, limit = 50, status } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const query = {};
    if (status) {
      query.status = status;
    }
    
    const orders = await Order.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    const total = await Order.countDocuments(query);
    
    res.json({
      success: true,
      orders,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке заказов' });
  }
});

// Обновить статус заказа
router.put('/orders/:orderId/status', checkAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findOne({ orderId: req.params.orderId });
    
    if (!order) {
      return res.status(404).json({ success: false, error: 'Заказ не найден' });
    }
    
    order.status = status;
    await order.save();
    
    res.json({ success: true, order });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========== СТАТИСТИКА ==========

// Получить статистику
router.get('/stats', checkAdmin, async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments({ active: true });
    const totalOrders = await Order.countDocuments();
    const pendingOrders = await Order.countDocuments({ status: 'pending' });
    const paidOrders = await Order.countDocuments({ status: 'paid' });
    
    // Общая выручка
    const orders = await Order.find({ status: { $in: ['paid', 'processing', 'shipped', 'delivered'] } });
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    
    // Товары с низким stock
    const lowStockProducts = await Product.find({
      $or: [
        { stock: { $lte: 5 } },
        { 'colors.stock': { $lte: 5 } },
        { 'memoryOptions.stock': { $lte: 5 } }
      ],
      active: true
    }).limit(10);
    
    res.json({
      success: true,
      stats: {
        totalProducts,
        totalOrders,
        pendingOrders,
        paidOrders,
        totalRevenue,
        lowStockProducts: lowStockProducts.map(p => ({
          id: p.id,
          name: p.name,
          stock: p.stock
        }))
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке статистики' });
  }
});

module.exports = router;

