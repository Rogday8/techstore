// Скрипт для миграции товаров из script.js в базу данных MongoDB
const mongoose = require('mongoose');
const Product = require('../models/Product');
const config = require('../../config/config');
const fs = require('fs');
const path = require('path');

// Читаем script.js и извлекаем массив products
async function extractProductsFromScript() {
  const scriptPath = path.join(__dirname, '../../script.js');
  const scriptContent = fs.readFileSync(scriptPath, 'utf8');
  
  // Находим начало массива products
  const productsStart = scriptContent.indexOf('const products = [');
  if (productsStart === -1) {
    throw new Error('Не найден массив products в script.js');
  }
  
  // Извлекаем массив (упрощенный способ - в реальности нужен более надежный парсер)
  const arrayStart = scriptContent.indexOf('[', productsStart);
  let bracketCount = 0;
  let inString = false;
  let stringChar = null;
  let i = arrayStart;
  
  while (i < scriptContent.length) {
    const char = scriptContent[i];
    
    if (!inString && (char === '"' || char === "'" || char === '`')) {
      inString = true;
      stringChar = char;
    } else if (inString && char === stringChar && scriptContent[i - 1] !== '\\') {
      inString = false;
      stringChar = null;
    } else if (!inString) {
      if (char === '[') bracketCount++;
      if (char === ']') {
        bracketCount--;
        if (bracketCount === 0) {
          const arrayString = scriptContent.substring(arrayStart, i + 1);
          // Используем eval для парсинга (в продакшене использовать более безопасный метод)
          return eval(arrayString);
        }
      }
    }
    i++;
  }
  
  throw new Error('Не удалось извлечь массив products');
}

// Преобразуем объекты товаров в формат базы данных
function transformProduct(product) {
  const transformed = {
    id: product.id,
    name: product.name,
    description: product.description || '',
    price: product.price,
    category: product.category,
    image: product.image || '',
    images: product.images || [],
    specs: product.specs || [],
    hasColors: product.hasColors || false,
    hasMemory: product.hasMemory || false,
    has3D: product.has3D || false,
    model3D: product.model3D || '',
    active: true,
    featured: false
  };
  
  // Преобразуем colors
  if (product.hasColors && product.colors) {
    const colorsMap = new Map();
    Object.keys(product.colors).forEach(colorName => {
      const colorData = product.colors[colorName];
      colorsMap.set(colorName, {
        name: colorName,
        image: colorData.image || '',
        images: colorData.images || [],
        stock: 10, // По умолчанию 10 товаров
        reserved: 0
      });
    });
    transformed.colors = colorsMap;
  }
  
  // Преобразуем memoryOptions
  if (product.hasMemory && product.memoryOptions) {
    const memoryMap = new Map();
    Object.keys(product.memoryOptions).forEach(memoryName => {
      const memoryData = product.memoryOptions[memoryName];
      memoryMap.set(memoryName, {
        name: memoryName,
        price: memoryData.price || 0,
        stock: 10, // По умолчанию 10 товаров
        reserved: 0
      });
    });
    transformed.memoryOptions = memoryMap;
  } else {
    // Если нет вариантов, устанавливаем общий stock
    transformed.stock = 10;
    transformed.reserved = 0;
  }
  
  return transformed;
}

// Основная функция миграции
async function migrateProducts() {
  try {
    console.log('🔌 Подключение к MongoDB...');
    await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Подключено к MongoDB');
    
    console.log('📖 Чтение товаров из script.js...');
    const products = await extractProductsFromScript();
    console.log(`✅ Найдено ${products.length} товаров`);
    
    console.log('🔄 Преобразование товаров...');
    const transformedProducts = products.map(transformProduct);
    
    console.log('💾 Сохранение товаров в базу данных...');
    let created = 0;
    let updated = 0;
    let errors = 0;
    
    for (const productData of transformedProducts) {
      try {
        const existingProduct = await Product.findOne({ id: productData.id });
        
        if (existingProduct) {
          // Обновляем существующий товар
          Object.keys(productData).forEach(key => {
            if (key !== 'id' && key !== '_id' && key !== '__v') {
              existingProduct[key] = productData[key];
            }
          });
          await existingProduct.save();
          updated++;
          console.log(`  ✏️  Обновлен: ${productData.name} (ID: ${productData.id})`);
        } else {
          // Создаем новый товар
          const product = new Product(productData);
          await product.save();
          created++;
          console.log(`  ➕ Создан: ${productData.name} (ID: ${productData.id})`);
        }
      } catch (error) {
        errors++;
        console.error(`  ❌ Ошибка при сохранении товара ${productData.id}:`, error.message);
      }
    }
    
    console.log('\n📊 Результаты миграции:');
    console.log(`  ➕ Создано: ${created}`);
    console.log(`  ✏️  Обновлено: ${updated}`);
    console.log(`  ❌ Ошибок: ${errors}`);
    console.log('✅ Миграция завершена!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Ошибка миграции:', error);
    process.exit(1);
  }
}

// Запуск миграции
migrateProducts();

