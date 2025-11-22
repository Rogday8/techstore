// Конфигурация для разных окружений
const path = require('path');

const config = {
  development: {
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/apple-favorite',
    jwtSecret: process.env.JWT_SECRET || 'dev-secret-key-change-in-production',
    adminPassword: process.env.ADMIN_PASSWORD || 'admin2025',
    corsOrigin: 'http://localhost:3000',
    uploadPath: path.join(__dirname, '..', 'uploads'),
    imagesPath: path.join(__dirname, '..', 'images'),
    reservationTimeout: 15 * 60 * 1000, // 15 минут в миллисекундах
    nodeEnv: 'development'
  },
  
  production: {
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/apple-favorite',
    jwtSecret: process.env.JWT_SECRET || 'CHANGE-THIS-IN-PRODUCTION',
    adminPassword: process.env.ADMIN_PASSWORD || 'CHANGE-THIS-IN-PRODUCTION',
    corsOrigin: process.env.CORS_ORIGIN || '*',
    uploadPath: process.env.UPLOAD_PATH || path.join(__dirname, '..', 'uploads'),
    imagesPath: process.env.IMAGES_PATH || path.join(__dirname, '..', 'images'),
    reservationTimeout: 15 * 60 * 1000,
    nodeEnv: 'production'
  }
};

const env = process.env.NODE_ENV || 'development';
module.exports = config[env];

