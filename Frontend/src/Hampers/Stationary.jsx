import React from 'react';
import { stationeryHampers } from '../Data/Stationary'; 
import ProductCard from '../Components/ProductCard';

function Snacks() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Stationary Hampers
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stationeryHampers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Snacks;
