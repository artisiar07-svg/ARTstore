import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { orderService } from '../api/services';
import { Navigate, Link } from 'react-router-dom';
import { FaBox, FaChevronDown, FaChevronUp, FaShoppingBag, FaExclamationTriangle } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const { user, loading: authLoading } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [ordersError, setOrdersError] = useState(false);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    if (!user) {
      setLoadingOrders(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        setOrdersError(false);
        const res = await orderService.getOrders(user.id);
        setOrders(res.data || []);
      } catch (err) {
        console.error('Ошибка загрузки заказов:', err);
        setOrdersError(true);
        setOrders([]);
      } finally {
        setLoadingOrders(false);
      }
    };
    fetchOrders();
  }, [user]);

  if (authLoading) {
    return <div className="loading">Загрузка профиля...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="profile-page">
      <h2 className="page-title">Личный кабинет</h2>

      <div className="profile-layout">
        <div className="profile-sidebar">
          <div className="profile-user-card card">
            <div className="profile-avatar">
              {user.name?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <div className="profile-stats card">
            <div className="stat-item">
              <FaShoppingBag />
              <div>
                <span className="stat-number">{orders.length}</span>
                <span className="stat-label">Заказов</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-content">
          <div className="orders-section">
            <h3>История заказов</h3>

            {loadingOrders ? (
              <div className="loading">Загрузка заказов...</div>
            ) : ordersError ? (
              <div className="error-message card">
                <FaExclamationTriangle className="error-icon" />
                <p>Не удалось загрузить заказы. Проверьте подключение или войдите заново.</p>
                <Link to="/login" className="btn btn-outline">Войти снова</Link>
              </div>
            ) : orders.length === 0 ? (
              <div className="empty-orders card">
                <FaBox className="empty-icon" />
                <p>У вас пока нет заказов</p>
                <Link to="/catalog" className="btn btn-primary">
                  Перейти в каталог
                </Link>
              </div>
            ) : (
              <div className="orders-list">
                {orders.map(order => (
                  <div key={order.id} className="order-card card">
                    <div className="order-header" onClick={() => toggleOrder(order.id)}>
                      <div className="order-header-left">
                        <h4>Заказ #{order.id}</h4>
                        <span className="order-date">
                          {new Date(order.created_at).toLocaleDateString('ru-RU', {
                            day: 'numeric', month: 'long', year: 'numeric',
                            hour: '2-digit', minute: '2-digit'
                          })}
                        </span>
                      </div>
                      <div className="order-header-right">
                        <span className="order-status" style={{ color: '#0071e3' }}>{order.status}</span>
                        <span className="order-total">{parseFloat(order.total).toLocaleString()} ₽</span>
                        {expandedOrder === order.id ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </div>

                    {expandedOrder === order.id && order.items && (
                      <div className="order-details">
                        <div className="order-items">
                          {order.items.map((item, index) => (
                            <div key={index} className="order-item">
                              <img
                                src={item.image || '/images/placeholder.svg'}
                                alt={item.name || 'Товар'}
                                className="order-item-image"
                              />
                              <div className="order-item-info">
                                <p className="order-item-name">{item.name || 'Товар'}</p>
                                <p className="order-item-quantity">Количество: {item.quantity}</p>
                              </div>
                              <div className="order-item-price">
                                {(item.price * item.quantity).toLocaleString()} ₽
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="order-summary">
                          <div className="order-summary-row">
                            <span>Товары ({order.items.reduce((sum, i) => sum + i.quantity, 0)})</span>
                            <span>{parseFloat(order.total).toLocaleString()} ₽</span>
                          </div>
                          <div className="order-summary-row">
                            <span>Доставка</span>
                            <span>Бесплатно</span>
                          </div>
                          <div className="order-summary-row total">
                            <strong>Итого</strong>
                            <strong>{parseFloat(order.total).toLocaleString()} ₽</strong>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;