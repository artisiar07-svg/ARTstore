import React, { useState } from 'react';
import { FaTruck, FaShieldAlt, FaUndo, FaCreditCard, FaGift, FaPhone, FaMapMarkerAlt, FaClock, FaTelegramPlane, FaVk, FaCheckCircle, FaStar } from 'react-icons/fa';
import './About.css';

const tabs = [
  { id: 'about', label: 'О нас'},
  { id: 'delivery', label: 'Доставка и оплата'},
  { id: 'warranty', label: 'Гарантии'},
  { id: 'returns', label: 'Обмен и возврат'},
  { id: 'credit', label: 'Рассрочка и кредит'},
  { id: 'certificates', label: 'Подарочные сертификаты'},
  { id: 'contacts', label: 'Контакты'},
];

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="tab-content-inner">
            <h2>О магазине ARTstore</h2>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Магазин ARTstore"
              className="store-image"
            />
            
            <div className="about-badge">
              <FaStar className="badge-icon" />
              <span>Официальный партнёр Apple с 2015 года</span>
            </div>

            <p>
              ARTstore — это не просто магазин техники. Это пространство, где технологии встречаются с 
              искусством. Мы специализируемся исключительно на продукции Apple и аксессуарах премиум-класса,
              предлагая полный спектр устройств: от новейших iPhone до профессиональных MacBook Pro.
            </p>

            <div className="feature-grid">
              <div className="feature-card">
                <FaCheckCircle className="feature-icon" />
                <h4>Оригинальная продукция</h4>
                <p>100% сертифицированная техника EAC с официальной гарантией Apple</p>
              </div>
              <div className="feature-card">
                <FaCheckCircle className="feature-icon" />
                <h4>Премиум-сервис</h4>
                <p>Индивидуальный подход к каждому клиенту и персональные консультации</p>
              </div>
              <div className="feature-card">
                <FaCheckCircle className="feature-icon" />
                <h4>Test before buy</h4>
                <p>Протестируйте любое устройство в нашем шоуруме перед покупкой</p>
              </div>
              <div className="feature-card">
                <FaCheckCircle className="feature-icon" />
                <h4>Быстрая доставка</h4>
                <p>Доставка по всей России с полной страховкой груза</p>
              </div>
            </div>

            <blockquote className="about-quote">
              "Мы верим, что техника Apple — это не просто инструменты, а продолжение вашего стиля жизни.
              Поэтому наш шоурум выполнен в минималистичных белых тонах, чтобы ничто не отвлекало вас 
              от знакомства с устройствами."
            </blockquote>

            <p>
              За 10 лет работы мы обслужили более 50 000 клиентов и получили рейтинг 4.9★ на независимых 
              площадках. В нашем каталоге представлены iPhone, iPad, Mac, Apple Watch, AirPods и сотни 
              аксессуаров. Каждое устройство проходит предпродажную проверку, а наши специалисты помогут 
              подобрать идеальную конфигурацию под ваши задачи.
            </p>

            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">лет работы</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50 000+</span>
                <span className="stat-label">клиентов</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.9</span>
                <span className="stat-label">рейтинг ★</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">оригинал</span>
              </div>
            </div>
          </div>
        );

      case 'delivery':
        return (
          <div className="tab-content-inner">
            <h2><FaTruck className="section-icon" /> Доставка и оплата</h2>
            
            <div className="delivery-grid">
              <div className="delivery-card">
                <h4> Курьером по Владивостоку</h4>
                <p>Доставка в день заказа при оформлении до 15:00. Стоимость — от 500 ₽.</p>
                <span className="badge">Бесплатно от 15 000 ₽</span>
              </div>
              <div className="delivery-card">
                <h4> Самовывоз</h4>
                <p>Заберите заказ самостоятельно из нашего магазина в ТЦ «ARTstore». Бесплатно в любое время.</p>
                <span className="badge">Бесплатно</span>
              </div>
              <div className="delivery-card">
                <h4> Почта России</h4>
                <p>Доставка по всей стране. Срок — от 3 до 10 рабочих дней. Трек-номер предоставляется сразу.</p>
                <span className="badge">от 350 ₽</span>
              </div>
              <div className="delivery-card">
                <h4> СДЭК / Boxberry</h4>
                <p>Пункты выдачи и курьерская доставка в любом городе РФ. Удобный выбор пункта на карте.</p>
                <span className="badge">от 450 ₽</span>
              </div>
            </div>

            <h3>Способы оплаты</h3>
            <div className="payment-grid">
              <div className="payment-card">
                <h4> Банковской картой</h4>
                <p>Visa, Mastercard, Мир. Мгновенное зачисление, безопасный платёж.</p>
              </div>
              <div className="payment-card">
                <h4> При получении</h4>
                <p>Наличными или картой курьеру / в пункте выдачи.</p>
              </div>
              <div className="payment-card">
                <h4> Бесконтактно</h4>
                <p>Apple Pay, Google Pay, SberPay, Mir Pay — выбирайте удобный сервис.</p>
              </div>
              <div className="payment-card">
                <h4> Для бизнеса</h4>
                <p>Безналичный расчёт для ИП и юрлиц. Выставляем счёт, предоставляем закрывающие документы.</p>
              </div>
            </div>
          </div>
        );

      case 'warranty':
        return (
          <div className="tab-content-inner">
            <h2><FaShieldAlt className="section-icon" /> Гарантии</h2>
            
            <div className="warranty-hero">
              <div className="warranty-icon-big">🛡️</div>
              <h3>Двойная защита вашей техники</h3>
              <p>Каждое устройство защищено гарантией Apple и расширенной программой ARTstore+</p>
            </div>

            <div className="warranty-grid">
              <div className="warranty-card">
                <h4>Гарантия Apple — 1 год</h4>
                <ul>
                  <li>Бесплатный ремонт заводских дефектов</li>
                  <li>Обслуживание в любом Apple Store мира</li>
                  <li>Телефонная поддержка AppleCare</li>
                  <li>Замена устройства при невозможности ремонта</li>
                </ul>
              </div>
              <div className="warranty-card highlight">
                <h4>ARTstore+ — до 2 лет</h4>
                <ul>
                  <li>Расширение гарантии до 2 лет</li>
                  <li>Неограниченное количество ремонтов</li>
                  <li>Замена аксессуаров в комплекте</li>
                  <li>Приоритетное обслуживание без очереди</li>
                  <li>Выезд курьера для замены устройства</li>
                </ul>
              </div>
            </div>

            <div className="warranty-info">
              <p>Все устройства сертифицированы EAC (Евразийский Таможенный Союз). Гарантийный ремонт 
              производится только авторизованными сервисными центрами Apple с использованием оригинальных 
              комплектующих.</p>
            </div>
          </div>
        );

      case 'returns':
        return (
          <div className="tab-content-inner">
            <h2><FaUndo className="section-icon" /> Обмен и возврат</h2>
            
            <div className="returns-timeline">
              <div className="timeline-item">
                <div className="timeline-number">1</div>
                <div className="timeline-content">
                  <h4>Проверьте товар при получении</h4>
                  <p>Осмотрите устройство, проверьте комплектацию и отсутствие внешних дефектов</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-number">2</div>
                <div className="timeline-content">
                  <h4>Оформите заявку</h4>
                  <p>В течение 14 дней обратитесь в магазин с паспортом и чеком, либо оформите заявку через личный кабинет</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-number">3</div>
                <div className="timeline-content">
                  <h4>Верните товар</h4>
                  <p>Упакуйте устройство в оригинальную коробку, сохраните все аксессуары и документы</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-number">4</div>
                <div className="timeline-content">
                  <h4>Получите деньги</h4>
                  <p>Возврат в течение 10 дней на ту же карту, с которой была оплата</p>
                </div>
              </div>
            </div>

            <div className="returns-important">
              <h4>⚠️ Важные условия</h4>
              <ul>
                <li>Товар должен сохранить товарный вид и полную комплектацию</li>
                <li>Устройство не должно иметь следов использования и активации</li>
                <li>Возврат невозможен для подарочных сертификатов и программного обеспечения</li>
              </ul>
            </div>
          </div>
        );

      case 'credit':
        return (
          <div className="tab-content-inner">
            <h2><FaCreditCard className="section-icon" /> Рассрочка и кредит</h2>
            
            <div className="credit-grid">
              <div className="credit-card">
                <div className="credit-header">
                  <h3>Рассрочка 0%</h3>
                  <span className="credit-badge">Без переплат</span>
                </div>
                <div className="credit-body">
                  <p>При покупке от 10 000 ₽</p>
                  <ul>
                    <li>Срок: 3, 6 или 12 месяцев</li>
                    <li>Банки-партнёры: Сбер, Т-Банк, Альфа-Банк</li>
                    <li>Оформление онлайн за 2 минуты</li>
                    <li>Только паспорт</li>
                  </ul>
                </div>
              </div>
              
              <div className="credit-card">
                <div className="credit-header">
                  <h3>Кредит</h3>
                  <span className="credit-badge">Гибкие условия</span>
                </div>
                <div className="credit-body">
                  <p>Ставка от 8.9% годовых</p>
                  <ul>
                    <li>Срок: до 24 месяцев</li>
                    <li>Сумма: до 500 000 ₽</li>
                    <li>Досрочное погашение без штрафов</li>
                    <li>Решение за 5 минут</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="credit-info">
              <p>Подробные условия уточняйте у менеджеров магазина или при оформлении заказа в корзине. 
              Все расчёты предварительные, окончательные условия зависят от банка-партнёра.</p>
            </div>
          </div>
        );

      case 'certificates':
        return (
          <div className="tab-content-inner">
            <h2><FaGift className="section-icon" /> Подарочные сертификаты</h2>
            
            <div className="certificate-hero">
              <div className="certificate-icon"></div>
              <h3>Идеальный подарок для ценителей Apple</h3>
              <p>Подарочный сертификат ARTstore — это свобода выбора для ваших близких</p>
            </div>

            <div className="certificate-nominals">
              <div className="nominal-card">5 000 ₽</div>
              <div className="nominal-card">10 000 ₽</div>
              <div className="nominal-card">15 000 ₽</div>
              <div className="nominal-card">25 000 ₽</div>
              <div className="nominal-card popular">50 000 ₽</div>
            </div>

            <div className="certificate-info">
              <div className="cert-info-card">
                <h4> Как приобрести</h4>
                <p>Сертификаты продаются <strong>только в розничном магазине</strong> по адресу: ул. Толстого, д. 10, ТЦ «ARTstore».</p>
              </div>
              <div className="cert-info-card">
                <h4> Оформление</h4>
                <p>Фирменный бланк в белом конверте с логотипом ARTstore. Возможна персонализация (имя получателя).</p>
              </div>
              <div className="cert-info-card">
                <h4> Срок действия</h4>
                <p>1 год с момента покупки. Можно использовать частями в магазине и на сайте.</p>
              </div>
              <div className="cert-info-card">
                <h4> Доставка почтой</h4>
                <p>Для заказа с доставкой свяжитесь с нами: <a href="tel:+74951234567">+7 (495) 123-45-67</a> или <a href="mailto:info@artstore.ru">info@artstore.ru</a></p>
              </div>
            </div>
          </div>
        );

      case 'contacts':
        return (
          <div className="tab-content-inner">
            <h2><FaPhone className="section-icon" /> Контакты</h2>
            
            <div className="contacts-grid">
              <div className="contact-card">
                <FaMapMarkerAlt className="contact-icon" />
                <h4>Адрес магазина</h4>
                <p>г. Владивосток, ул. Толстого, д. 10</p>
                <p className="contact-sub">ТЦ «ARTstore», 1 этаж</p>
              </div>
              <div className="contact-card">
                <FaClock className="contact-icon" />
                <h4>Режим работы</h4>
                <p>Ежедневно</p>
                <p className="contact-sub">с 10:00 до 21:00</p>
                <span className="badge">Без выходных</span>
              </div>
              <div className="contact-card">
                <FaPhone className="contact-icon" />
                <h4>Телефон</h4>
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
                <p className="contact-sub">Звонки принимаем с 10:00 до 20:00</p>
              </div>
              <div className="contact-card">
                <FaPhone className="contact-icon" />
                <h4>Email</h4>
                <a href="mailto:info@artstore.ru">info@artstore.ru</a>
                <p className="contact-sub">Отвечаем в течение 1 часа</p>
              </div>
            </div>

            <div className="contacts-social">
              <h4>Социальные сети</h4>
              <div className="contacts-social-links">
                <a href="https://t.me/artstore" target="_blank" rel="noopener noreferrer" className="social-btn telegram">
                  <FaTelegramPlane /> Telegram
                </a>
                <a href="https://vk.com/artstore" target="_blank" rel="noopener noreferrer" className="social-btn vk">
                  <FaVk /> ВКонтакте
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1 className="page-title">Информация</h1>
        <p className="page-subtitle">Всё, что нужно знать о магазине ARTstore</p>
      </div>
      <div className="about-layout">
        <nav className="about-sidebar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`about-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="about-content card">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default About;