import React from 'react';
import styles from '../styles/ProductSkeleton.module.css';

const ProductSkeleton = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.imageWrapper}></div>
      <div className={styles.details}>
        <div className={styles.text}></div>
        <div className={styles.short}></div>
        <div className={styles.footer}>
          <div className={styles.price}></div>
          <div className={styles.rating}></div>
        </div>
      </div>
      <div className={styles.button}></div>
    </div>
  );
};

export default ProductSkeleton;