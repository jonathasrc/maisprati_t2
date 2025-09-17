import React from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const { cartItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">Mini Loja Eletrônicos</a>
      </div>
      <div className={styles.actions}>
        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label={`Ativar tema ${theme === 'light' ? 'escuro' : 'claro'}`}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div 
          className={styles.cartBadge}
          role="status"
          aria-label={`Carrinho de compras com ${totalItems} itens`}
        >
          <span>🛒</span>
          <span 
            className={`${styles.badge} ${totalItems > 0 ? styles.visible : ''}`} 
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