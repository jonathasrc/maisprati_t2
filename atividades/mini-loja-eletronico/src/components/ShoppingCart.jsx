import React from 'react';
import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <aside className="shopping-cart">
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
          <div className="cart-total">
            <strong>Total:</strong>
            <strong>R$ {totalPrice.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </aside>
  );
};

export default ShoppingCart;