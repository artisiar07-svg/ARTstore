import React from 'react';
import { FaTelegramPlane, FaVk, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Верхняя полоса */}
      <div className="footer-top-strip">
        <div className="footer-container">
          <div className="footer-top-item">
            <FaMapMarkerAlt className="footer-top-icon" />
            <span>г. Владивосток, ул. Толстого, д. 10, ТЦ «ARTstore»</span>
          </div>
          <div className="footer-top-item">
            <FaPhone className="footer-top-icon" />
            <a href="tel:+74951234567">+7 (495) 123-45-67</a>
          </div>
          <div className="footer-top-item">
            <FaEnvelope className="footer-top-icon" />
            <a href="mailto:info@artstore.ru">info@artstore.ru</a>
          </div>
        </div>
      </div>

      {/* Основная часть */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Бренд */}
          <div className="footer-col footer-brand">
            <Link to="/" className="footer-logo">
              <FaApple className="footer-logo-icon" />
              <span>ARTstore</span>
            </Link>
            <p className="footer-tagline">
              Премиальный магазин техники Apple.<br />
              Официальный партнёр с 2015 года.
            </p>
            <div className="social-icons">
              <a href="https://t.me/artstore" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegramPlane />
              </a>
              <a href="https://vk.com/artstore" target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте">
                <FaVk />
              </a>
              <a href="https://youtube.com/@artstore" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Каталог */}
          <div className="footer-col">
            <h4>Каталог</h4>
            <ul>
              <li><Link to="/catalog/phones">iPhone</Link></li>
              <li><Link to="/catalog/tablets">iPad</Link></li>
              <li><Link to="/catalog/laptops">MacBook</Link></li>
              <li><Link to="/catalog/watches">Apple Watch</Link></li>
              <li><Link to="/catalog/audio">AirPods</Link></li>
              <li><Link to="/catalog/accessories">Аксессуары</Link></li>
            </ul>
          </div>
          {/* Личный кабинет */}
          <div className="footer-col">
            <h4>Аккаунт</h4>
            <ul>
              <li><Link to="/profile">Личный кабинет</Link></li>
              <li><Link to="/cart">Корзина</Link></li>
              <li><Link to="/login">Войти</Link></li>
              <li><Link to="/register">Регистрация</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>© 2026 ARTstore. Все права защищены.</p>
          <p className="footer-bottom-text">Apple, iPhone, iPad, MacBook, AirPods и Apple Watch являются товарными знаками Apple Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;