import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Catalog.css';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');

  const categories = ['Все', 'iPhone', 'iPad', 'Mac', 'Watch', 'Audio', 'Accessories'];

  // Собираем уникальные модели и памяти для фильтров (зависит от категории)
  const availableModels = useMemo(() => {
    let filtered = products;
    if (selectedCategory !== 'Все') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    const models = [...new Set(filtered.map(p => p.model))].sort();
    return models;
  }, [selectedCategory]);

  const availableStorages = useMemo(() => {
    let filtered = products;
    if (selectedCategory !== 'Все') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    const storages = [...new Set(filtered.map(p => p.storage))].filter(Boolean).sort();
    return storages;
  }, [selectedCategory]);

  // Фильтрация товаров
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (selectedCategory !== 'Все' && product.category !== selectedCategory) return false;
      if (priceFrom && product.price < Number(priceFrom)) return false;
      if (priceTo && product.price > Number(priceTo)) return false;
      if (selectedModel && product.model !== selectedModel) return false;
      if (selectedStorage && product.storage !== selectedStorage) return false;
      return true;
    });
  }, [selectedCategory, priceFrom, priceTo, selectedModel, selectedStorage]);

  return (
    <div className="catalog-page">
      <h2 className="page-title">Каталог</h2>
      <div className="catalog-layout">
        {/* Боковая панель фильтров */}
        <aside className="catalog-sidebar">
          <h3>Категории</h3>
          <ul className="category-list">
            {categories.map(cat => (
              <li
                key={cat}
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>

          <h3>Цена (₽)</h3>
          <div className="price-filter">
            <input
              type="number"
              placeholder="От"
              value={priceFrom}
              onChange={e => setPriceFrom(e.target.value)}
            />
            <input
              type="number"
              placeholder="До"
              value={priceTo}
              onChange={e => setPriceTo(e.target.value)}
            />
          </div>

          <h3>Модель</h3>
          <select value={selectedModel} onChange={e => setSelectedModel(e.target.value)}>
            <option value="">Все модели</option>
            {availableModels.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <h3>Объём памяти</h3>
          <select value={selectedStorage} onChange={e => setSelectedStorage(e.target.value)}>
            <option value="">Любой</option>
            {availableStorages.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <button
            className="btn btn-outline reset-btn"
            onClick={() => {
              setSelectedCategory('Все');
              setPriceFrom('');
              setPriceTo('');
              setSelectedModel('');
              setSelectedStorage('');
            }}
          >
            Сбросить фильтры
          </button>
        </aside>

        {/* Сетка товаров */}
        <div className="catalog-grid">
          {filteredProducts.length === 0 && <p>Товаров не найдено. Попробуйте изменить фильтры.</p>}
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;