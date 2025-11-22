const mongoose = require('mongoose');

// Схема резервирования товара
const reservationSchema = new mongoose.Schema({
  reservationId: { type: String, required: true, unique: true },
  orderId: { type: String, required: true },
  productId: { type: Number, required: true },
  color: { type: String, default: null },
  memory: { type: String, default: null },
  quantity: { type: Number, required: true, min: 1 },
  expiresAt: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  confirmed: { type: Boolean, default: false } // Подтверждено ли резервирование (оплачено)
}, {
  timestamps: true
});

// Индексы
reservationSchema.index({ reservationId: 1 });
reservationSchema.index({ orderId: 1 });
reservationSchema.index({ productId: 1 });
reservationSchema.index({ expiresAt: 1 });
reservationSchema.index({ createdAt: 1 });

// Генерация уникального ID резервирования
reservationSchema.statics.generateReservationId = function() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `RES-${timestamp}-${random}`;
};

// Проверка истечения резервирования
reservationSchema.methods.isExpired = function() {
  return new Date() > this.expiresAt;
};

module.exports = mongoose.model('Reservation', reservationSchema);

