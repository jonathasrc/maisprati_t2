import React from 'react';
import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <aside className="flex-auto min-w-[280px] bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md self-start border border-gray-200 dark:border-dark-card">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center text-sm">
                <span className="flex-grow pr-4">{item.name} (x{item.quantity})</span>
                <span className="font-semibold">R$ {(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remover ${item.name} do carrinho`}
                  className="ml-2 text-danger text-xl hover:text-red-800 transition-transform hover:scale-110"
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <hr className="my-4 border-gray-200 dark:border-gray-600" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>R$ {totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </aside>
  );
};

export default ShoppingCart;