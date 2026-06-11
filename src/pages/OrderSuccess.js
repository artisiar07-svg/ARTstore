import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const location = useLocation();
  const orderNumber = location.state?.orderNumber || Math.floor(Math.random() * 900000) + 100000;

  return (
    <div className="order-success-container">
      <div className="order-success-card card">
        <div className="success-icon">
          <FaCheckCircle />
        </div>
        <h2>Заказ успешно оформлен!</h2>
        <p className="order-number">Номер заказа: <strong>#{orderNumber}</strong></p>
        <p className="order-message">
          Спасибо за покупку! Мы отправили детали заказа на вашу электронную почту.
          Вы также можете отслеживать статус заказа в личном кабинете.
        </p>
        <div className="success-actions">
          <Link to="/catalog" className="btn btn-primary">
            Продолжить покупки
          </Link>
          <Link to="/profile" className="btn btn-outline">
            Личный кабинет
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;