import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productService } from '../api/services';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const { user } = useAuth();
  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [brandFilter, setBrandFilter] = useState('Все');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [storageFilter, setStorageFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [catRes, prodRes] = await Promise.all([
          productService.getCategories(),
          productService.getProducts()
        ]);
        setCategories(catRes.data);
        setProducts(prodRes.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Не удалось загрузить товары');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const currentCategory = useMemo(
    () => categories.find(cat => cat.slug === category),
    [categories, category]
  );

  const filteredProducts = useMemo(() => {
    if (!currentCategory) return [];
    let result = products.filter(
      p => Number(p.categoryId) === Number(currentCategory.id)
    );
    if (brandFilter !== 'Все') result = result.filter(p => p.brand === brandFilter);
    if (priceFrom) result = result.filter(p => Math.min(...p.variants.map(v => v.price)) >= Number(priceFrom));
    if (priceTo) result = result.filter(p => Math.min(...p.variants.map(v => v.price)) <= Number(priceTo));
    if (storageFilter && storageFilter !== 'Любой') result = result.filter(p => p.variants.some(v => v.storage === storageFilter));
    return result;
  }, [products, currentCategory, brandFilter, priceFrom, priceTo, storageFilter]);

  const brands = useMemo(() => {
    const catProducts = products.filter(p => Number(p.categoryId) === Number(currentCategory?.id));
    return ['Все', ...new Set(catProducts.map(p => p.brand))];
  }, [products, currentCategory]);

  const storages = useMemo(() => {
    const catProducts = products.filter(p => Number(p.categoryId) === Number(currentCategory?.id));
    const allStorages = catProducts.flatMap(p => p.variants.map(v => v.storage).filter(Boolean));
    return ['Любой', ...new Set(allStorages)];
  }, [products, currentCategory]);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;

  const getMinPrice = (product) => Math.min(...product.variants.map(v => v.price));
  const getMainImage = (product) => product.variants[0]?.image || '/images/placeholder.svg';

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    const variant = product.variants[0];
    addItem({
      productId: product.id,
      sku: variant.sku,
      name: product.name,
      price: variant.price,
      image: variant.image || '/images/placeholder.svg',
      color: variant.color,
      storage: variant.storage,
    });
  };

  return (
    <div className="category-page">
      <h2 className="page-title">Товары категории: {currentCategory?.name || category}</h2>
      <div className="filters">
        <select value={brandFilter} onChange={e => setBrandFilter(e.target.value)}>
          {brands.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        <input type="number" placeholder="Цена от" value={priceFrom} onChange={e => setPriceFrom(e.target.value)} />
        <input type="number" placeholder="Цена до" value={priceTo} onChange={e => setPriceTo(e.target.value)} />
        {storages.length > 1 && (
          <select value={storageFilter} onChange={e => setStorageFilter(e.target.value)}>
            {storages.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        )}
        <button className="btn btn-outline" onClick={() => { setBrandFilter('Все'); setPriceFrom(''); setPriceTo(''); setStorageFilter(''); }}>
          Сбросить фильтры
        </button>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="no-products">В этой категории пока нет товаров.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card card">
              <div className="product-card-image">
                <img src={getMainImage(product)} alt={product.name} />
              </div>
              <div className="product-card-info">
                <h3>{product.name}</h3>
                <p className="brand">{product.brand}</p>
                <p className="price">от {getMinPrice(product).toLocaleString()} ₽</p>
              </div>
              {user ? (
                <button className="btn btn-primary" onClick={(e) => handleAddToCart(e, product)}>
                  В корзину
                </button>
              ) : (
                <span className="btn btn-outline" onClick={(e) => { e.preventDefault(); window.location.href = '/login'; }}>
                  Войти
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;