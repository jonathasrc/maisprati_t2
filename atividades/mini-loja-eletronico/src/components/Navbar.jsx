import React from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="app-navbar">
      <div className="navbar-logo">
        <a href="/">EletronoStore</a>
      </div>
      <div className="navbar-actions">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={`Ativar tema ${theme === 'light' ? 'escuro' : 'claro'}`}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div 
          className="cart-badge"
          role="status"
          aria-label={`Carrinho de compras com ${totalItems} itens`}
        >
          <span>🛒</span>
          <span 
            className={`badge ${totalItems > 0 ? 'visible' : ''}`} 
            aria-hidden="true"
          >
            {totalItems}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;