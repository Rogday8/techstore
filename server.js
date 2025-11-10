const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const fse = require('fs-extra');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

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

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Reviews API: http://localhost:${PORT}/api/reviews`);
    console.log(`Reviews file: ${reviewsFile}`);
    console.log(`Reviews directory: ${otzDir}`);
});
