const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');
const Reservation = require('../models/Reservation');
const multer = require('multer');
const path = require('path');
const fse = require('fs-extra');
const config = require('../../config/config');
const XLSX = require('xlsx');

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

// Настройка multer для загрузки Excel/CSV файлов
const excelStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../../uploads/temp');
    fse.ensureDirSync(uploadPath);
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, 'import-' + uniqueSuffix + ext);
  }
});

const uploadExcel = multer({
  storage: excelStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: function (req, file, cb) {
    const allowedTypes = /xlsx|xls|csv/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || 
                     file.mimetype === 'application/vnd.ms-excel' ||
                     file.mimetype === 'text/csv' ||
                     file.mimetype === 'application/csv';
    
    if (mimetype || extname) {
      cb(null, true);
    } else {
      cb(new Error('Только Excel (.xlsx, .xls) и CSV файлы разрешены!'));
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
    
    // Отправляем WebSocket уведомление о создании товара
    const io = req.app.get('io');
    if (io) {
      const productObj = product.toObject();
      // Преобразуем Map в объекты
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
      io.to('products').emit('product:created', { product: productObj });
    }
    
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
    
    // Отправляем WebSocket уведомление об обновлении товара
    const io = req.app.get('io');
    if (io) {
      const productObj = product.toObject();
      // Преобразуем Map в объекты
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
      io.to('products').emit('product:updated', { product: productObj });
    }
    
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
    
    // Отправляем WebSocket уведомление об удалении товара
    const io = req.app.get('io');
    if (io) {
      io.to('products').emit('product:deleted', { productId: productId });
    }
    
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
    
    // Отправляем WebSocket уведомление об обновлении stock
    const io = req.app.get('io');
    if (io) {
      const availableStock = product.getAvailableStock(color, memory);
      io.to('products').emit('stock:update', {
        productId: productId,
        stock: availableStock,
        available: availableStock > 0,
        color: color || null,
        memory: memory || null
      });
      
      // Также отправляем обновление товара
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
      io.to('products').emit('product:updated', { product: productObj });
    }
    
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

// ========== МАССОВЫЕ ОПЕРАЦИИ С ЦЕНАМИ ==========

// Массовое изменение цен на процент
router.post('/products/bulk-price-change', checkAdmin, async (req, res) => {
  try {
    const { percent, category, increase } = req.body;
    
    if (!percent || percent === 0) {
      return res.status(400).json({ success: false, error: 'Укажите процент изменения' });
    }
    
    const query = { active: true };
    if (category && category !== 'all') {
      query.category = category;
    }
    
    const products = await Product.find(query);
    let updatedCount = 0;
    const multiplier = increase ? (1 + percent / 100) : (1 - percent / 100);
    
    for (const product of products) {
      // Изменяем основную цену
      product.price = Math.round(product.price * multiplier * 100) / 100;
      
      // Изменяем цены вариантов памяти, если есть
      if (product.hasMemory && product.memoryOptions.size > 0) {
        product.memoryOptions.forEach((variant, key) => {
          variant.price = Math.round(variant.price * multiplier * 100) / 100;
        });
        product.markModified('memoryOptions');
      }
      
      await product.save();
      updatedCount++;
    }
    
    res.json({
      success: true,
      message: `Обновлено ${updatedCount} товаров`,
      updatedCount,
      operation: increase ? 'увеличено' : 'уменьшено',
      percent: Math.abs(percent)
    });
  } catch (error) {
    console.error('Error bulk updating prices:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========== ИМПОРТ ИЗ EXCEL/CSV ==========

// Импорт товаров из Excel/CSV файла
router.post('/products/import', checkAdmin, uploadExcel.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'Файл не загружен' });
    }
    
    const filePath = req.file.path;
    const fileExt = path.extname(req.file.originalname).toLowerCase();
    
    let workbook;
    if (fileExt === '.csv') {
      // Читаем CSV файл
      const csvContent = fse.readFileSync(filePath, 'utf-8');
      workbook = XLSX.read(csvContent, { type: 'string' });
    } else {
      // Читаем Excel файл
      workbook = XLSX.readFile(filePath);
    }
    
    // Получаем первый лист
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // Преобразуем в JSON
    const data = XLSX.utils.sheet_to_json(worksheet);
    
    if (data.length === 0) {
      // Удаляем временный файл
      fse.removeSync(filePath);
      return res.status(400).json({ success: false, error: 'Файл пуст' });
    }
    
    const results = {
      created: 0,
      updated: 0,
      errors: []
    };
    
    // Получаем максимальный ID
    const lastProduct = await Product.findOne().sort({ id: -1 });
    let nextId = lastProduct ? lastProduct.id + 1 : 1;
    
    // Обрабатываем каждую строку
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      try {
        // Парсим данные (ожидаемые колонки: name, category, price, stock, description, image, images)
        const productData = {
          name: row.name || row['Название'] || row['Name'],
          category: row.category || row['Категория'] || row['Category'] || 'default',
          price: parseFloat(row.price || row['Цена'] || row['Price'] || 0),
          stock: parseInt(row.stock || row['Количество'] || row['Stock'] || 0),
          description: row.description || row['Описание'] || row['Description'] || '',
          image: row.image || row['Изображение'] || row['Image'] || '',
          images: row.images ? (Array.isArray(row.images) ? row.images : row.images.split(',').map(s => s.trim())) : [],
          active: row.active !== undefined ? (row.active === true || row.active === 'true' || row.active === 'Да') : true
        };
        
        if (!productData.name || !productData.price) {
          results.errors.push(`Строка ${i + 2}: Отсутствует название или цена`);
          continue;
        }
        
        // Проверяем, существует ли товар с таким названием
        let product = await Product.findOne({ name: productData.name });
        
        if (product) {
          // Обновляем существующий товар
          Object.keys(productData).forEach(key => {
            if (productData[key] !== undefined && key !== 'id') {
              product[key] = productData[key];
            }
          });
          await product.save();
          results.updated++;
        } else {
          // Создаем новый товар
          product = new Product({
            id: nextId++,
            ...productData
          });
          await product.save();
          results.created++;
        }
      } catch (error) {
        results.errors.push(`Строка ${i + 2}: ${error.message}`);
      }
    }
    
    // Удаляем временный файл
    fse.removeSync(filePath);
    
    res.json({
      success: true,
      message: `Импорт завершен. Создано: ${results.created}, Обновлено: ${results.updated}`,
      results
    });
  } catch (error) {
    console.error('Error importing products:', error);
    
    // Удаляем временный файл в случае ошибки
    if (req.file && req.file.path) {
      fse.removeSync(req.file.path).catch(() => {});
    }
    
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

