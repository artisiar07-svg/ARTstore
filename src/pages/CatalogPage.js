import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../api/services';
import './CatalogPage.css';

const CatalogPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await productService.getCategories();
        setCategories(res.data);
      } catch (error) {
        console.error('Ошибка загрузки категорий:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="catalog-page">
      <h2 className="page-title">Каталог</h2>
      <div className="categories-grid">
        {categories.map(cat => (
          <Link to={`/catalog/${cat.slug}`} key={cat.id} className="category-card card">
            <img src={cat.image} alt={cat.name} className="category-icon" />
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;