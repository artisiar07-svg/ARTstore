import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { reviewService } from '../api/services';
import { useAuth } from '../context/AuthContext';
import { FaStar } from 'react-icons/fa';
import './Reviews.css';

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await reviewService.getByProduct(productId);
        setReviews(res.data || []);
      } catch (error) {
        console.error('Ошибка загрузки отзывов:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const newReview = {
      productId,
      userId: user?.id || 1,
      userName: user?.name || 'Гость',   // ← сохраняем имя пользователя
      rating,
      text,
      date: new Date().toISOString().split('T')[0]
    };
    try {
      await reviewService.add(newReview);
      setReviews(prev => [newReview, ...prev]);
      setName('');
      setText('');
      setRating(5);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Ошибка отправки отзыва:', error);
    }
  };

  if (loading) return <div className="loading">Загрузка отзывов...</div>;

  return (
    <section className="reviews-section">
      <h2>Отзывы</h2>
      {user ? (
        <div className="review-form card">
          <h3>Оставьте отзыв</h3>
          {submitted && <p className="review-success">Спасибо! Ваш отзыв опубликован.</p>}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)} required />
            <textarea placeholder="Ваш отзыв" rows="4" value={text} onChange={e => setText(e.target.value)} required />
            <div className="rating-row">
              <span>Оценка:</span>
              <div className="stars">
                {[1,2,3,4,5].map(num => (
                  <FaStar key={num} className={`star ${num <= rating ? 'active' : ''}`} onClick={() => setRating(num)} />
                ))}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Отправить</button>
          </form>
        </div>
      ) : (
        <div className="review-form card">
          <h3>Оставьте отзыв</h3>
          <p className="review-login-message">
            Чтобы оставить отзыв, пожалуйста, <Link to="/login">войдите в аккаунт</Link> или <Link to="/register">зарегистрируйтесь</Link>.
          </p>
        </div>
      )}

      <div className="reviews-list">
        {reviews.length === 0 ? (
          <p>Пока нет отзывов. Будьте первым!</p>
        ) : (
          reviews.map(review => (
            <div key={review.id} className="review-card card">
              <div className="review-header">
                <strong>{review.userName || review.userId}</strong>
                <span className="review-date">{review.date}</span>
                <span className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? 'star active' : 'star'} />
                  ))}
                </span>
              </div>
              <p>{review.text}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Reviews;