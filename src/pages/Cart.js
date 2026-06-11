import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import './Cart.css';

const Cart = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Корзина пуста</h2>
        <p>Добавьте товары из <Link to="/catalog">каталога</Link>.</p>
      </div>
    );
  }

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <h2 className="page-title">Корзина</h2>
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.sku} item={item} />
        ))}
      </div>
      <div className="cart-summary card">
        <div className="summary-row">
          <span>Итого:</span>
          <span className="total-price">{totalPrice.toLocaleString()} ₽</span>
        </div>
        <div className="cart-actions">
          <button className="btn btn-outline" onClick={clearCart}>
            Очистить корзину
          </button>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;