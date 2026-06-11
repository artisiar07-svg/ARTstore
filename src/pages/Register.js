import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register(name, email, password);
    if (success) {
      navigate('/profile');
    } else {
      setError('Пользователь с таким email уже существует');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card card">
        <h2>Регистрация</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit" className="btn btn-primary full-width">Зарегистрироваться</button>
        </form>
        <p className="auth-switch">Уже есть аккаунт? <Link to="/login">Войти</Link></p>
      </div>
    </div>
  );
};

export default Register;