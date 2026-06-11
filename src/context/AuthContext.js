import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService, orderService } from '../api/services';
import CryptoJS from 'crypto-js';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const SECRET = 'artstore-secret-key-2026';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('artstore_user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      orderService.getOrders(parsedUser.id)
        .then(res => setOrders(res.data))
        .catch(() => setOrders([]));
    }
    setLoading(false);
  }, []);

  const register = async (name, email, password) => {
    try {
      const encrypted = CryptoJS.AES.encrypt(password, SECRET).toString();
      const res = await authService.register({ name, email, password: encrypted });
      const newUser = res.data;
      const userData = { id: newUser.id, name: newUser.name, email: newUser.email };
      setUser(userData);
      localStorage.setItem('artstore_user', JSON.stringify(userData));
      setOrders([]);
      return true;
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      const res = await authService.login(email);
      if (res.data.length === 0) return false;

      const foundUser = res.data[0];
      const bytes = CryptoJS.AES.decrypt(foundUser.password, SECRET);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);

      if (decrypted === password) {
        const userData = { id: foundUser.id, name: foundUser.name, email: foundUser.email };
        setUser(userData);
        localStorage.setItem('artstore_user', JSON.stringify(userData));
        const ordersRes = await orderService.getOrders(foundUser.id);
        setOrders(ordersRes.data);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Ошибка входа:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setOrders([]);
    localStorage.removeItem('artstore_user');
  };

  const addOrder = async (orderData) => {
    try {
      const newOrder = {
        userId: user.id,
        created_at: new Date().toISOString(),
        status: 'Обрабатывается',
        total: orderData.total,
        items: orderData.items.map(item => ({
          variantSku: item.sku,
          quantity: item.quantity,
          price: item.price,
          name: item.name,      // ← сохраняем название товара
          image: item.image     // ← сохраняем изображение
        }))
      };
      const res = await orderService.createOrder(newOrder);
      setOrders(prev => [...prev, res.data]);
      return res.data;
    } catch (error) {
      console.error('Ошибка создания заказа:', error);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, orders, login, register, logout, addOrder, loading }}>
      {children}
    </AuthContext.Provider>
  );
};