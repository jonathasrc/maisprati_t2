import React from 'react';
import { useCart } from '../context/CartContext';
import clsx from 'clsx';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useCart();
  const isProductInCart = cartItems.some((item) => item.id === product.id);
  const isOutOfStock = product.stock === 0;

  const handleAddToCart = () => {
    if (!isProductInCart && !isOutOfStock) {
      addToCart(product);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleAddToCart();
    }
  };

  const cardClasses = clsx(
    'bg-light-card dark:bg-dark-card rounded-lg shadow-md overflow-hidden flex flex-col text-left transition-all duration-200 hover:-translate-y-2 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary group',
    { 'opacity-60 pointer-events-none select-none': isOutOfStock },
    'animate-fadeIn'
  );

  const buttonClasses = clsx(
    'w-full p-3 font-bold text-base transition-colors border-t-2',
    {
      'bg-success text-white border-transparent hover:bg-success-hover': !isProductInCart && !isOutOfStock,
      'bg-transparent text-success border-success': isProductInCart && !isOutOfStock,
      'bg-gray-400 text-gray-800 border-transparent cursor-not-allowed': isOutOfStock,
    }
  );
  
  const tagClasses = clsx(
    'absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded z-10',
    {
      'bg-primary': product.tag === 'Novo',
      'bg-danger': product.tag === 'Promo',
    }
  );

  return (
    <div 
      className={cardClasses}
      tabIndex={isOutOfStock ? -1 : 0}
      role="group"
      aria-labelledby={`product-title-${product.id}`}
      onKeyDown={handleKeyDown}
    >
      {product.tag && <div className={tagClasses}>{product.tag}</div>}
      {isOutOfStock && <div className="absolute inset-0 bg-gray-500/50 flex items-center justify-center text-white font-bold text-xl z-10 backdrop-blur-sm">SEM ESTOQUE</div>}

      <div className="aspect-square w-full bg-gray-200 dark:bg-gray-500 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy" 
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 id={`product-title-${product.id}`} title={product.name} className="text-base font-semibold h-12 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex justify-between items-center mt-auto pt-2">
          <p className="text-xl font-bold text-primary dark:text-primary-dark">R$ {product.price.toFixed(2)}</p>
          <div className="flex items-center gap-1 font-bold text-sm">
            <span className="text-yellow-500 text-lg">★</span> {product.rating.toFixed(1)}
          </div>
        </div>
      </div>
      
      <button 
        className={buttonClasses}
        onClick={handleAddToCart}
        disabled={isProductInCart || isOutOfStock}
        tabIndex={-1}
      >
        {isOutOfStock ? 'Sem estoque' : (isProductInCart ? 'Adicionado ✔' : 'Adicionar')}
      </button>
    </div>
  );
};

export default ProductCard;