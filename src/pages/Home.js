import React from 'react';
import { Link } from 'react-router-dom';
import { news, promotions } from '../data/news';
import './Home.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">ARTstore</h1>
          <p className="hero-subtitle">Салон техники Apple</p>
          <p className="hero-description">
            Добро пожаловать в ARTstore — премиальный магазин Apple, где вы найдёте последние модели iPhone, iPad, Mac,
            Apple Watch, AirPods и оригинальные аксессуары. Минималистичный дизайн, индивидуальные консультации и полный
            спектр услуг: от помощи в выборе до постпродажного обслуживания.
          </p>
          <div className="hero-buttons">
            <Link to="/catalog" className="btn btn-primary hero-btn">
              Смотреть каталог
            </Link>
            <Link to="/about" className="btn btn-outline hero-btn">
              Узнать больше
            </Link>
          </div>
        </div>
      </section>

      {/* ===== СЛАЙДЕР БАННЕРОВ ===== */}
      <section className="slider-section">
        <h2 className="section-title">Популярные товары</h2>
        <div className="slider-container">
          <div className="slider-track">
            <div className="slider-card">
              <div className="slider-card-image">
                <img src="/images/images1/17_black_01-450x450.png" alt="iPhone" />
              </div>
              <div className="slider-card-content">
                <span className="slider-card-tag">Новинка</span>
                <h3>iPhone 17</h3>
                <p>256GB | 512GB</p>
                <Link to="/catalog" className="btn btn-primary btn-sm">
                  Заказать
                </Link>
              </div>
            </div>

            <div className="slider-card">
              <div className="slider-card-image">
                <img src="/images/images3/7992bc4e860221d8dac4c7b485189aa3df5fc7eb381aa53ada4135f000dfb68d.png.webp" alt="Mac" />
              </div>
              <div className="slider-card-content">
                <span className="slider-card-tag">Хит продаж</span>
                <h3>Новые Mac</h3>
                <p>С суперсилой чипов M4</p>
                <div className="slider-card-badges">
                  <span>MacBook Pro</span>
                  <span>iMac</span>
                  <span>Mac mini</span>
                </div>
                <Link to="/catalog" className="btn btn-primary btn-sm">
                  Заказать
                </Link>
              </div>
            </div>

            <div className="slider-card">
              <div className="slider-card-image">
                <img src="/images/images1/black1-450x450.png" alt="Samsung" />
              </div>
              <div className="slider-card-content">
                <span className="slider-card-tag">Эксклюзив</span>
                <h3>Samsung</h3>
                <p>S26 | S26+ | S26 ultra</p>
                <p className="slider-card-subtitle">Galaxy AI+</p>
                <Link to="/catalog" className="btn btn-primary btn-sm">
                  Заказать
                </Link>
              </div>
            </div>

            <div className="slider-card">
              <div className="slider-card-image">
                <img src="/images/images2/pro_13_2024_space_black_01-450x450.jpg" alt="iPad" />
              </div>
              <div className="slider-card-content">
                <span className="slider-card-tag">Рекомендуем</span>
                <h3>iPad Pro M4</h3>
                <p>Самый тонкий iPad</p>
                <Link to="/catalog" className="btn btn-primary btn-sm">
                  Заказать
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ОСОБЕННОСТИ ===== */}
      <section className="features-section">
        <h2 className="section-title">Почему выбирают нас</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Только оригиналы</h3>
            <p>Вся техника сертифицирована, имеет официальную гарантию Apple и поставляется напрямую со складов производителя.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Белая эстетика</h3>
            <p>Наш салон выдержан в светлых тонах, чтобы вы чувствовали лёгкость и фокусировались на технике.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Личный кабинет</h3>
            <p>Отслеживайте заказы, сохраняйте избранное и получайте персональные предложения — всё в одном месте.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Быстрая доставка</h3>
            <p>Доставляем по Москве за 1–2 дня, по России — от 3 дней. Самовывоз через 2 часа после заказа.</p>
          </div>
        </div>
      </section>

      {/* Новости */}
<section className="news-section">
  <h2 className="section-title">Новости в мире техники</h2>
  <div className="news-grid">
    {news.slice(0, 6).map(item => (
      <article key={item.id} className="news-card">
        <span className="news-date">{item.date}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </article>
    ))}
  </div>
</section>

      {/* ===== АКЦИИ ===== */}
      <section className="promo-section">
        <h2 className="section-title">Акции и предложения</h2>
        <div className="promo-grid">
          {promotions.map(promo => (
            <div key={promo.id} className="promo-card">
              <div className="promo-card-header">
                <h3>{promo.title}</h3>
                <span className="promo-period">{promo.period}</span>
              </div>
              <p>{promo.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ОТЗЫВЫ ===== */}
      <Reviews />
    </div>
  );
};

export default Home;