import React from 'react';
import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.productId, item.sku, item.quantity - 1);
    } else {
      removeItem(item.productId, item.sku);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.productId, item.sku, item.quantity + 1);
  };

  const handleRemove = () => {
    removeItem(item.productId, item.sku);
  };

  return (
    <div className="cart-item card">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        {item.color && <p className="cart-item-variant">Цвет: {item.color}</p>}
        {item.storage && <p className="cart-item-variant">Память: {item.storage}</p>}
        <p className="cart-item-price">{item.price.toLocaleString()} ₽</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-control">
          <button onClick={handleDecrease}>−</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <button className="btn-icon" onClick={handleRemove}>
          <FaTrash />
        </button>
        <div className="cart-item-total">
          {(item.price * item.quantity).toLocaleString()} ₽
        </div>
      </div>
    </div>
  );
};

export default CartItem;