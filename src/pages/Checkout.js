import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Checkout.css';

const Checkout = () => {
  const [status, setStatus] = useState('connecting');
  const [progress, setProgress] = useState(0);
  const { items, totalPrice, clearCart } = useCart();
  const { addOrder } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const steps = [
      { duration: 1000, text: 'Устанавливаем связь с банком...', progress: 20 },
      { duration: 1500, text: 'Устанавливаем связь с банком...', progress: 40 },
      { duration: 1500, text: 'Устанавливаем связь с банком...', progress: 60 },
      { duration: 2000, text: 'Устанавливаем связь с банком...', progress: 80 },
      { duration: 1000, text: 'Устанавливаем связь с банком...', progress: 100 },
    ];

    let currentStep = 0;
    let timer;

    const runStep = () => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        setStatus(step.text);
        setProgress(step.progress);
        
        timer = setTimeout(() => {
          currentStep++;
          runStep();
        }, step.duration);
      } else {
        setStatus('Заказ успешно оформлен!');
        setProgress(100);
        
        // Сохраняем заказ в историю
        const newOrder = addOrder({
          items: [...items],
          total: totalPrice
        });
        
        timer = setTimeout(() => {
          clearCart();
          navigate('/order-success', { state: { orderNumber: newOrder.orderNumber } });
        }, 2000);
      }
    };

    runStep();

    return () => clearTimeout(timer);
  }, [items, totalPrice, clearCart, addOrder, navigate]);

  return (
    <div className="checkout-container">
      <div className="checkout-card card">
        <h2>Оформление заказа</h2>
        
        <div className="checkout-animation">
          <div className="spinner"></div>
        </div>

        <div className="checkout-status">
          <p className="status-text">{status}</p>
        </div>

        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="progress-text">{progress}%</p>

        <div className="checkout-info">
          <p>Пожалуйста, не закрывайте страницу</p>
          <p>Это может занять несколько секунд</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;