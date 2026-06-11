import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate('/profile');
    } else {
      setError('Неверный email или пароль');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card card">
        <h2>Вход</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit" className="btn btn-primary full-width">Войти</button>
        </form>
        <p className="auth-switch">Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
      </div>
    </div>
  );
};

export default Login;