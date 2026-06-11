const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8000;

// Безопасность
app.use(helmet({ contentSecurityPolicy: false }));

// Ограничение запросов
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Слишком много запросов. Повторите позже.' }
});
app.use('/api/', limiter);

app.use(express.json());

// Загрузка базы данных из db.json
let db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));

// Автоматическое сохранение db.json
function saveDb() {
  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(db, null, 2));
}

// Резервное копирование
function backupDb() {
  const backupDir = path.join(__dirname, 'backups');
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir);
  fs.copyFileSync(path.join(__dirname, 'db.json'), path.join(backupDir, `db-${Date.now()}.json`));
}

// Универсальный обработчик для коллекций
app.get('/api/:collection', (req, res) => {
  const { collection } = req.params;
  if (!db[collection]) return res.status(404).json({ error: 'Collection not found' });
  let items = db[collection];

  // Фильтрация по параметрам запроса
  for (const key in req.query) {
    items = items.filter(item => item[key] == req.query[key]);
  }

  res.json(items);
});

app.get('/api/:collection/:id', (req, res) => {
  const { collection, id } = req.params;
  if (!db[collection]) return res.status(404).json({ error: 'Collection not found' });

  const item = db[collection].find(i => i.id == id || i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

app.post('/api/:collection', (req, res) => {
  const { collection } = req.params;
  if (!db[collection]) {
    db[collection] = [];
  }

  const newItem = { ...req.body, id: Date.now().toString() };
  db[collection].push(newItem);
  saveDb();
  backupDb();
  res.status(201).json(newItem);
});

app.put('/api/:collection/:id', (req, res) => {
  const { collection, id } = req.params;
  if (!db[collection]) return res.status(404).json({ error: 'Collection not found' });

  const index = db[collection].findIndex(i => i.id == id || i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  db[collection][index] = { ...db[collection][index], ...req.body };
  saveDb();
  backupDb();
  res.json(db[collection][index]);
});

app.delete('/api/:collection/:id', (req, res) => {
  const { collection, id } = req.params;
  if (!db[collection]) return res.status(404).json({ error: 'Collection not found' });

  const index = db[collection].findIndex(i => i.id == id || i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  db[collection].splice(index, 1);
  saveDb();
  backupDb();
  res.json({ success: true });
});

// Раздача статики React (для production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});