import React from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/ShoppingCart.module.css'; 

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <aside className={styles.shoppingCart}>
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name} (x{item.quantity})</span>
                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remover ${item.name} do carrinho`}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <hr />
          <div className={styles.cartTotal}>
            <strong>Total:</strong>
            <strong>R$ {totalPrice.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </aside>
  );
};

export default ShoppingCart;