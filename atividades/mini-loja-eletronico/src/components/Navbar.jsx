import React from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-light-card dark:bg-dark-header text-light-text dark:text-dark-text py-3 px-8 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-200 border-b border-gray-200 dark:border-dark-card">
      <div className="text-2xl font-bold">
        <a href="/" className="text-light-text dark:text-dark-text no-underline">EletronoStore</a>
      </div>
      <div className="flex items-center gap-6">
        <button
          onClick={toggleTheme}
          className="bg-transparent border border-gray-500 dark:border-dark-text rounded-full h-10 w-10 flex items-center justify-center text-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:-translate-y-0.5"
          aria-label={`Ativar tema ${theme === 'light' ? 'escuro' : 'claro'}`}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div 
          className="relative text-2xl"
          role="status"
          aria-label={`Carrinho de compras com ${totalItems} itens`}
        >
          <span>🛒</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-danger text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-light-card dark:border-dark-header">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;