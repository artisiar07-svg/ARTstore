import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productService } from '../api/services';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Reviews from '../components/Reviews';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productService.getProduct(id);
        setProduct(res.data);
        if (res.data?.variants?.length > 0) {
          setSelectedVariant(res.data.variants[0]);
        }
      } catch (error) {
        console.error('Ошибка загрузки товара:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (!product) return <div className="not-found">Товар не найден</div>;

  const colors = [...new Set(product.variants.map(v => v.color))];
  const storages = [...new Set(product.variants.map(v => v.storage))];

  const handleColorChange = (color) => {
    const newVar = product.variants.find(v => v.color === color && v.storage === selectedVariant.storage)
                || product.variants.find(v => v.color === color);
    if (newVar) setSelectedVariant(newVar);
  };

  const handleStorageChange = (storage) => {
    const newVar = product.variants.find(v => v.storage === storage && v.color === selectedVariant.color)
                || product.variants.find(v => v.storage === storage);
    if (newVar) setSelectedVariant(newVar);
  };

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      sku: selectedVariant.sku,
      name: product.name,
      price: selectedVariant.price,
      image: selectedVariant.image,
      color: selectedVariant.color,
      storage: selectedVariant.storage,
    });
  };

  return (
    <div className="product-detail">
      <div className="breadcrumbs">
        <Link to="/catalog">Каталог</Link> / {product.category?.name || 'Категория'} / {product.name}
      </div>
      <div className="product-main">
        <div className="product-gallery">
          <div className="main-image">
            <img src={selectedVariant?.image} alt={product.name} />
          </div>
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-brand">{product.brand}</p>
          <div className="product-price">{selectedVariant?.price?.toLocaleString()} ₽</div>

          {colors.length > 1 && (
            <div className="option-group">
              <span>Цвет:</span>
              <div className="color-options">
                {colors.map(color => (
                  <button
                    key={color}
                    className={`color-btn ${selectedVariant.color === color ? 'active' : ''}`}
                    onClick={() => handleColorChange(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {storages.length > 1 && storages[0] !== '' && (
            <div className="option-group">
              <span>Память:</span>
              <div className="storage-options">
                {storages.map(storage => (
                  <button
                    key={storage}
                    className={`storage-btn ${selectedVariant.storage === storage ? 'active' : ''}`}
                    onClick={() => handleStorageChange(storage)}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>
          )}

          {user ? (
            <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart}>
              Добавить в корзину
            </button>
          ) : (
            <Link to="/login" className="btn btn-outline add-to-cart-btn">
              Войдите, чтобы добавить в корзину
            </Link>
          )}
        </div>
      </div>
      <div className="product-specs card">
        <h2>Характеристики</h2>
        <table className="specs-table">
          <tbody>
            {Object.entries(product.specs || {}).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Reviews productId={product.id} />
    </div>
  );
};

export default ProductDetail;