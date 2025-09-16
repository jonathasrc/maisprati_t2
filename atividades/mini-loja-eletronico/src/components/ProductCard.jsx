import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useCart();

  const isProductInCart = cartItems.some((item) => item.id === product.id);
  const isOutOfStock = product.stock === 0;

  let buttonClassName = 'btn-solid';
  let buttonText = 'Adicionar';

  if (isOutOfStock) {
    buttonClassName = 'btn-disabled';
    buttonText = 'Sem estoque';
  } else if (isProductInCart) {
    buttonClassName = 'btn-outline';
    buttonText = 'Adicionado ✔';
  }

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

  return (
    <div 
      className={`product-card loaded ${isOutOfStock ? 'disabled' : ''}`}
      tabIndex={isOutOfStock ? -1 : 0}
      role="group"
      aria-labelledby={`product-title-${product.id}`}
      onKeyDown={handleKeyDown}
    >
      {product.tag && <div className="product-tag">{product.tag}</div>}
      {isOutOfStock && <div className="disabled-overlay">SEM ESTOQUE</div>}

      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details">
        <h3 id={`product-title-${product.id}`} title={product.name}>{product.name}</h3>
        
        <div className="product-footer">
          <p className="price">R$ {product.price.toFixed(2)}</p>
          <div className="product-rating">
            <span>★</span> {product.rating.toFixed(1)}
          </div>
        </div>
      </div>
      
      <button 
        className={buttonClassName} 
        onClick={handleAddToCart}
        disabled={isProductInCart || isOutOfStock}
        tabIndex={-1}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProductCard;