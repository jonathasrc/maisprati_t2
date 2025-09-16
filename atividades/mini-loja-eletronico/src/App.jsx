import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <ProductList />
        <ShoppingCart />
      </main>
      <Footer />
    </div>
  );
}

export default App;