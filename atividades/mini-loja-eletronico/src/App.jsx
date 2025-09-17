import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-wrap gap-8 p-8 mt-[70px]">
        <ProductList />
        <ShoppingCart />
      </main>
      <Footer />
    </div>
  );
}

export default App;