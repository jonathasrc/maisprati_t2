import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative aspect-square w-full bg-gray-300 dark:bg-gray-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
      </div>
      <div className="p-4 flex flex-col flex-grow gap-3">
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        <div className="flex justify-between items-center mt-auto pt-2">
          <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
      <div className="w-full h-[50px] bg-gray-300 dark:bg-gray-600"></div>
    </div>
  );
};

export default ProductSkeleton;