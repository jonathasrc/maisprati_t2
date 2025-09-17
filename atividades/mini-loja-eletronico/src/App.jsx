import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <ProductList />
        <ShoppingCart />
      </main>
      <Footer />
    </div>
  );
}

export default App;