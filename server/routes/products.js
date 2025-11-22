const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Reservation = require('../models/Reservation');

// Получить все товары
router.get('/', async (req, res) => {
  try {
    const { category, active, featured, search } = req.query;
    
    const query = {};
    if (category && category !== 'all') {
      query.category = category;
    }
    if (active !== undefined) {
      query.active = active === 'true';
    }
    if (featured !== undefined) {
      query.featured = featured === 'true';
    }
    if (search) {
      query.$text = { $search: search };
    }
    
    const products = await Product.find(query).sort({ id: 1 });
    
    // Преобразуем Map в объекты для JSON
    const formattedProducts = products.map(product => {
      const productObj = product.toObject();
      
      // Преобразуем colors Map в объект
      if (productObj.colors && productObj.colors instanceof Map) {
        const colorsObj = {};
        productObj.colors.forEach((value, key) => {
          colorsObj[key] = value;
        });
        productObj.colors = colorsObj;
      }
      
      // Преобразуем memoryOptions Map в объект
      if (productObj.memoryOptions && productObj.memoryOptions instanceof Map) {
        const memoryObj = {};
        productObj.memoryOptions.forEach((value, key) => {
          memoryObj[key] = value;
        });
        productObj.memoryOptions = memoryObj;
      }
      
      return productObj;
    });
    
    res.json({ success: true, products: formattedProducts });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке товаров' });
  }
});

// Получить товар по ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ id: parseInt(req.params.id) });
    
    if (!product) {
      return res.status(404).json({ success: false, error: 'Товар не найден' });
    }
    
    const productObj = product.toObject();
    
    // Преобразуем Map в объекты
    if (productObj.colors && productObj.colors instanceof Map) {
      const colorsObj = {};
      productObj.colors.forEach((value, key) => {
        colorsObj[key] = value;
      });
      productObj.colors = colorsObj;
    }
    
    if (productObj.memoryOptions && productObj.memoryOptions instanceof Map) {
      const memoryObj = {};
      productObj.memoryOptions.forEach((value, key) => {
        memoryObj[key] = value;
      });
      productObj.memoryOptions = memoryObj;
    }
    
    res.json({ success: true, product: productObj });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке товара' });
  }
});

// Проверить доступность товара
router.post('/:id/check', async (req, res) => {
  try {
    const { color, memory, quantity = 1 } = req.body;
    const productId = parseInt(req.params.id);
    
    const product = await Product.findOne({ id: productId });
    
    if (!product) {
      return res.status(404).json({ success: false, available: false, error: 'Товар не найден' });
    }
    
    if (!product.active) {
      return res.json({ success: true, available: false, reason: 'Товар неактивен' });
    }
    
    const availableStock = product.getAvailableStock(color, memory);
    const available = availableStock >= quantity;
    
    res.json({
      success: true,
      available,
      stock: availableStock,
      requested: quantity,
      reason: available ? null : 'Недостаточно товара на складе'
    });
  } catch (error) {
    console.error('Error checking product availability:', error);
    res.status(500).json({ success: false, available: false, error: 'Ошибка при проверке товара' });
  }
});

// Получить stock для товара
router.get('/:id/stock', async (req, res) => {
  try {
    const { color, memory } = req.query;
    const productId = parseInt(req.params.id);
    
    const product = await Product.findOne({ id: productId });
    
    if (!product) {
      return res.status(404).json({ success: false, error: 'Товар не найден' });
    }
    
    const availableStock = product.getAvailableStock(color, memory);
    
    res.json({
      success: true,
      stock: availableStock,
      totalStock: product.hasColors && color 
        ? (product.colors.get(color)?.stock || 0)
        : product.hasMemory && memory
        ? (product.memoryOptions.get(memory)?.stock || 0)
        : product.stock,
      reserved: product.hasColors && color
        ? (product.colors.get(color)?.reserved || 0)
        : product.hasMemory && memory
        ? (product.memoryOptions.get(memory)?.reserved || 0)
        : product.reserved
    });
  } catch (error) {
    console.error('Error fetching stock:', error);
    res.status(500).json({ success: false, error: 'Ошибка при получении stock' });
  }
});

// Получить все категории
router.get('/categories/list', async (req, res) => {
  try {
    const categories = await Product.distinct('category', { active: true });
    res.json({ success: true, categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке категорий' });
  }
});

module.exports = router;

