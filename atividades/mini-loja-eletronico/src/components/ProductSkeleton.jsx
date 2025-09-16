import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="product-card skeleton-card">
      <div className="product-image-wrapper skeleton"></div>
      <div className="product-details">
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text short"></div>
        <div className="product-footer">
          <div className="skeleton skeleton-text price"></div>
          <div className="skeleton skeleton-text rating"></div>
        </div>
      </div>
      <div className="skeleton skeleton-button"></div>
    </div>
  );
};

export default ProductSkeleton;