import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="product-card card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc">{product.description}</p>
      <div className="product-footer">
        <span className="product-price">{product.price.toLocaleString()} ₽</span>
        <button className="btn btn-primary" onClick={() => addItem(product)}>
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;