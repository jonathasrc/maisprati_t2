import React from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useCart();

  const isProductInCart = cartItems.some((item) => item.id === product.id);
  const isOutOfStock = product.stock === 0;

  // CORREÇÃO 1: Usar o objeto 'styles' para as classes do botão
  let buttonClassName = styles.btnSolid;
  let buttonText = 'Adicionar';

  if (isOutOfStock) {
    buttonClassName = styles.btnDisabled; // Adicione esta classe ao seu CSS se não existir
    buttonText = 'Sem estoque';
  } else if (isProductInCart) {
    buttonClassName = styles.btnOutline;
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

  // CORREÇÃO 2: Combinar classes de forma segura
  const cardClasses = [
    styles.productCard,
    styles.loaded,
    isOutOfStock ? styles.disabled : ''
  ].join(' ');

  return (
    <div 
      className={cardClasses}
      tabIndex={isOutOfStock ? -1 : 0}
      role="group"
      aria-labelledby={`product-title-${product.id}`}
      onKeyDown={handleKeyDown}
    >
      {product.tag && <div className={styles.tag}>{product.tag}</div>}
      {isOutOfStock && <div className={styles.disabledOverlay}>SEM ESTOQUE</div>}

      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
      </div>

      <div className={styles.details}>
        <h3 id={`product-title-${product.id}`} title={product.name}>{product.name}</h3>
        
        <div className={styles.footer}>
          <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
          <div className={styles.rating}>
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