import axios from 'axios';

const api = axios.create({
  baseURL: 'https://artstore.com/api',  // ← замените на ваш реальный URL от Render
  headers: { 'Content-Type': 'application/json' }
});

export default api;