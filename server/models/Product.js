const mongoose = require('mongoose');

// Схема для вариантов цвета
const colorVariantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  images: [String],
  stock: { type: Number, default: 0, min: 0 },
  reserved: { type: Number, default: 0, min: 0 }
}, { _id: false });

// Схема для вариантов памяти
const memoryVariantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 0, min: 0 },
  reserved: { type: Number, default: 0, min: 0 }
}, { _id: false });

// Основная схема товара
const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  
  // Основное изображение
  image: { type: String, default: '' },
  
  // Массив изображений (если нет цветов)
  images: [String],
  
  // Характеристики
  specs: [String],
  
  // Варианты цвета
  hasColors: { type: Boolean, default: false },
  colors: {
    type: Map,
    of: colorVariantSchema,
    default: {}
  },
  
  // Варианты памяти
  hasMemory: { type: Boolean, default: false },
  memoryOptions: {
    type: Map,
    of: memoryVariantSchema,
    default: {}
  },
  
  // Общий stock (если нет вариантов)
  stock: { type: Number, default: 0, min: 0 },
  reserved: { type: Number, default: 0, min: 0 },
  
  // 3D модель
  has3D: { type: Boolean, default: false },
  model3D: { type: String, default: '' },
  
  // Статус товара
  active: { type: Boolean, default: true },
  featured: { type: Boolean, default: false },
  
  // Метаданные
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  version: { type: Number, default: 0 } // Для оптимистичной блокировки
}, {
  timestamps: true
});

// Индексы для быстрого поиска
productSchema.index({ id: 1 });
productSchema.index({ category: 1 });
productSchema.index({ active: 1 });
productSchema.index({ name: 'text', description: 'text' });

// Метод для получения доступного количества
productSchema.methods.getAvailableStock = function(color, memory) {
  if (this.hasColors && color) {
    const colorVariant = this.colors.get(color);
    if (!colorVariant) return 0;
    
    if (this.hasMemory && memory) {
      // Если есть и цвет, и память - используем stock цвета
      return Math.max(0, colorVariant.stock - colorVariant.reserved);
    }
    return Math.max(0, colorVariant.stock - colorVariant.reserved);
  }
  
  if (this.hasMemory && memory) {
    const memoryVariant = this.memoryOptions.get(memory);
    if (!memoryVariant) return 0;
    return Math.max(0, memoryVariant.stock - memoryVariant.reserved);
  }
  
  return Math.max(0, this.stock - this.reserved);
};

// Метод для резервирования товара
productSchema.methods.reserve = function(quantity, color, memory) {
  if (this.hasColors && color) {
    const colorVariant = this.colors.get(color);
    if (!colorVariant) throw new Error('Цвет не найден');
    
    if (colorVariant.stock - colorVariant.reserved < quantity) {
      throw new Error('Недостаточно товара на складе');
    }
    
    colorVariant.reserved += quantity;
    this.markModified('colors');
  } else if (this.hasMemory && memory) {
    const memoryVariant = this.memoryOptions.get(memory);
    if (!memoryVariant) throw new Error('Вариант памяти не найден');
    
    if (memoryVariant.stock - memoryVariant.reserved < quantity) {
      throw new Error('Недостаточно товара на складе');
    }
    
    memoryVariant.reserved += quantity;
    this.markModified('memoryOptions');
  } else {
    if (this.stock - this.reserved < quantity) {
      throw new Error('Недостаточно товара на складе');
    }
    this.reserved += quantity;
  }
  
  this.version += 1;
  return this.save();
};

// Метод для подтверждения резервирования (при оплате)
productSchema.methods.confirmReservation = function(quantity, color, memory) {
  if (this.hasColors && color) {
    const colorVariant = this.colors.get(color);
    if (!colorVariant) throw new Error('Цвет не найден');
    
    if (colorVariant.reserved < quantity) {
      throw new Error('Недостаточно зарезервированного товара');
    }
    
    colorVariant.stock -= quantity;
    colorVariant.reserved -= quantity;
    this.markModified('colors');
  } else if (this.hasMemory && memory) {
    const memoryVariant = this.memoryOptions.get(memory);
    if (!memoryVariant) throw new Error('Вариант памяти не найден');
    
    if (memoryVariant.reserved < quantity) {
      throw new Error('Недостаточно зарезервированного товара');
    }
    
    memoryVariant.stock -= quantity;
    memoryVariant.reserved -= quantity;
    this.markModified('memoryOptions');
  } else {
    if (this.reserved < quantity) {
      throw new Error('Недостаточно зарезервированного товара');
    }
    this.stock -= quantity;
    this.reserved -= quantity;
  }
  
  this.version += 1;
  return this.save();
};

// Метод для отмены резервирования
productSchema.methods.cancelReservation = function(quantity, color, memory) {
  if (this.hasColors && color) {
    const colorVariant = this.colors.get(color);
    if (colorVariant) {
      colorVariant.reserved = Math.max(0, colorVariant.reserved - quantity);
      this.markModified('colors');
    }
  } else if (this.hasMemory && memory) {
    const memoryVariant = this.memoryOptions.get(memory);
    if (memoryVariant) {
      memoryVariant.reserved = Math.max(0, memoryVariant.reserved - quantity);
      this.markModified('memoryOptions');
    }
  } else {
    this.reserved = Math.max(0, this.reserved - quantity);
  }
  
  this.version += 1;
  return this.save();
};

module.exports = mongoose.model('Product', productSchema);

