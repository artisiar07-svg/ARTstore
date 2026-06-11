import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { FaShoppingBag, FaUser, FaSignOutAlt, FaBars, FaTimes, FaApple } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <FaApple className="logo-icon" />
          <span>ARTstore</span>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/catalog" className="nav-link">
            Каталог
          </Link>
          <Link to="/about" className="nav-link">
            Информация
          </Link>
          
          <Link to="/cart" className="nav-link cart-link">
            <FaShoppingBag />
            Корзина
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>

          {user ? (
            <>
              <Link to="/profile" className="nav-link">
                <FaUser />
                {user.name}
              </Link>
              <button onClick={handleLogout} className="nav-link logout-btn">
                <FaSignOutAlt />
                Выйти
              </button>
            </>
          ) : (
            <Link to="/login" className="nav-link login-btn">
              <FaUser />
              Войти
            </Link>
          )}
        </nav>

        <button
          className="burger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Header;