import React, { useState, useEffect } from 'react';
import { products as mockProducts } from '../data/products';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const skeletonCount = Array.from({ length: 6 });

  return (
    <div 
      className="flex-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-w-[300px]"
      aria-busy={loading}
      aria-live="polite"
    >
      {loading
        ? skeletonCount.map((_, index) => <ProductSkeleton key={index} />)
        : products.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </div>
  );
};

export default ProductList;