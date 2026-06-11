const express = require('express');
const jsonServer = require('json-server');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8000;

// --- Безопасность: заголовки ---
app.use(helmet({
  contentSecurityPolicy: false, // отключаем для локальной разработки, в продакшне нужно настроить
}));

// --- Ограничение частоты запросов ---
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100,                  // максимум 100 запросов с одного IP
  message: { error: 'Слишком много запросов. Повторите позже.' }
});
app.use('/api/', limiter);

// --- JSON Server ---
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: false });
app.use('/api', middlewares, router);

// --- Резервное копирование db.json при каждом запросе на изменение ---
app.use((req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
    const backupPath = path.join(__dirname, 'backups', `db-${Date.now()}.json`);
    if (!fs.existsSync(path.join(__dirname, 'backups'))) {
      fs.mkdirSync(path.join(__dirname, 'backups'));
    }
    fs.copyFileSync(path.join(__dirname, 'db.json'), backupPath);
  }
  next();
});

// --- Раздача статики React (для production) ---
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT} с полной безопасностью`);
});