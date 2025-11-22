const express = require('express');
const http = require('http');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const fse = require('fs-extra');
const path = require('path');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const cron = require('node-cron');
const config = require('./config/config');

// Подключение к MongoDB
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Подключено к MongoDB');
}).catch((error) => {
  console.error('❌ Ошибка подключения к MongoDB:', error);
  process.exit(1);
});

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: config.corsOrigin,
    methods: ['GET', 'POST']
  }
});

// Делаем io доступным в req.app
app.set('io', io);

const PORT = config.port;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static('.'));

// Импорт моделей
const Product = require('./server/models/Product');
const Order = require('./server/models/Order');
const Reservation = require('./server/models/Reservation');

// Импорт routes
const productsRoutes = require('./server/routes/products');
const ordersRoutes = require('./server/routes/orders');
const adminRoutes = require('./server/routes/admin');

// API Routes
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/admin', adminRoutes);

// Создаем папку otz, если её нет
const otzDir = path.join(__dirname, 'images', 'otz');
fse.ensureDirSync(otzDir);

// Путь к файлу с отзывами
const reviewsFile = path.join(otzDir, 'reviews.json');

// Инициализация файла отзывов, если его нет
if (!fse.existsSync(reviewsFile)) {
    fse.writeJsonSync(reviewsFile, []);
}

// Получить все отзывы
app.get('/api/reviews', (req, res) => {
    try {
        const reviews = fse.readJsonSync(reviewsFile);
        res.json(reviews);
    } catch (error) {
        console.error('Error reading reviews:', error);
        res.status(500).json({ error: 'Ошибка при загрузке отзывов' });
    }
});

// Создать новый отзыв
app.post('/api/reviews', (req, res) => {
    const reviewId = Date.now().toString();
    
    // Настройка multer с динамическим reviewId
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            const reviewDir = path.join(otzDir, reviewId);
            fse.ensureDirSync(reviewDir);
            cb(null, reviewDir);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const ext = path.extname(file.originalname);
            cb(null, 'image-' + uniqueSuffix + ext);
        }
    });
    
    const upload = multer({ 
        storage: storage,
        limits: {
            fileSize: 10 * 1024 * 1024 // 10MB
        },
        fileFilter: function (req, file, cb) {
            const allowedTypes = /jpeg|jpg|png|gif|webp/;
            const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
            const mimetype = allowedTypes.test(file.mimetype);
            
            if (mimetype && extname) {
                return cb(null, true);
            } else {
                cb(new Error('Только изображения разрешены!'));
            }
        }
    }).array('images', 10);
    
    upload(req, res, function(err) {
        if (err) {
            console.error('Upload error:', err);
            return res.status(500).json({ error: 'Ошибка при загрузке изображений: ' + err.message });
        }
        
        try {
            const { name, email, rating, text } = req.body;
            
            // Получаем пути к загруженным изображениям
            const images = req.files ? req.files.map(file => {
                // Возвращаем относительный путь от корня проекта
                const relativePath = file.path.replace(/\\/g, '/');
                const projectRoot = __dirname.replace(/\\/g, '/') + '/';
                return relativePath.replace(projectRoot, '');
            }) : [];
            
            const review = {
                id: reviewId,
                name: name,
                email: email,
                rating: parseInt(rating),
                text: text,
                images: images,
                date: new Date().toISOString()
            };
            
            // Читаем существующие отзывы
            let reviews = [];
            if (fse.existsSync(reviewsFile)) {
                reviews = fse.readJsonSync(reviewsFile);
            }
            
            // Добавляем новый отзыв
            reviews.push(review);
            
            // Сохраняем отзывы
            fse.writeJsonSync(reviewsFile, reviews, { spaces: 2 });
            
            res.json({ success: true, review: review });
        } catch (error) {
            console.error('Error creating review:', error);
            res.status(500).json({ error: 'Ошибка при создании отзыва: ' + error.message });
        }
    });
});

// Удалить отзыв
app.delete('/api/reviews/:id', (req, res) => {
    try {
        const reviewId = req.params.id;
        
        // Читаем отзывы
        let reviews = fse.readJsonSync(reviewsFile);
        
        // Находим отзыв
        const reviewIndex = reviews.findIndex(r => r.id === reviewId);
        if (reviewIndex === -1) {
            return res.status(404).json({ error: 'Отзыв не найден' });
        }
        
        const review = reviews[reviewIndex];
        
        // Удаляем папку с изображениями
        const reviewDir = path.join(otzDir, reviewId);
        if (fse.existsSync(reviewDir)) {
            fse.removeSync(reviewDir);
        }
        
        // Удаляем отзыв из массива
        reviews.splice(reviewIndex, 1);
        
        // Сохраняем обновленные отзывы
        fse.writeJsonSync(reviewsFile, reviews, { spaces: 2 });
        
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ error: 'Ошибка при удалении отзыва' });
    }
});

// WebSocket для обновлений в реальном времени
io.on('connection', (socket) => {
  console.log('👤 Клиент подключен:', socket.id);
  
  // Подписка на обновления товаров
  socket.on('subscribe:products', () => {
    socket.join('products');
    console.log('📦 Клиент подписан на обновления товаров');
  });
  
  socket.on('disconnect', () => {
    console.log('👤 Клиент отключен:', socket.id);
  });
});

// Функция для отправки обновления stock
function broadcastStockUpdate(productId, stock, available) {
  io.to('products').emit('stock:update', {
    productId,
    stock,
    available
  });
}

// Cron job для очистки истекших резервирований (каждую минуту)
cron.schedule('* * * * *', async () => {
  try {
    const expiredReservations = await Reservation.find({
      expiresAt: { $lt: new Date() },
      confirmed: false
    });
    
    if (expiredReservations.length > 0) {
      console.log(`🕐 Очистка ${expiredReservations.length} истекших резервирований`);
      
      for (const reservation of expiredReservations) {
        const product = await Product.findOne({ id: reservation.productId });
        if (product) {
          await product.cancelReservation(reservation.quantity, reservation.color, reservation.memory);
          
          // Отправляем обновление stock
          const availableStock = product.getAvailableStock(reservation.color, reservation.memory);
          broadcastStockUpdate(reservation.productId, availableStock, availableStock > 0);
        }
        
        // Удаляем резервирование
        await Reservation.deleteOne({ _id: reservation._id });
      }
    }
  } catch (error) {
    console.error('❌ Ошибка при очистке резервирований:', error);
  }
});

// Запуск сервера
server.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
    console.log(`📦 API товаров: http://localhost:${PORT}/api/products`);
    console.log(`🛒 API заказов: http://localhost:${PORT}/api/orders`);
    console.log(`👨‍💼 API админ-панели: http://localhost:${PORT}/api/admin`);
    console.log(`💬 API отзывов: http://localhost:${PORT}/api/reviews`);
    console.log(`🌐 Окружение: ${config.nodeEnv}`);
});
