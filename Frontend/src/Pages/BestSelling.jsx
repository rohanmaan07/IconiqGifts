import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { products } from "../Data/BestSellingProducts";
import ProductCard from "../Components/ProductCard";

const BestSelling = () => {
  const containerRef = useRef(null);
  const scrollAmount = 250;

  const scroll = (dir) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Best Selling Gifts
      </h2>

      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth no-scrollbar px-2"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 w-72 sm:w-1/2 md:w-1/4 cursor-pointer"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-0 p-2 bg-white shadow rounded-full z-10 opacity-80 hover:opacity-100"
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-0 p-2 bg-white shadow rounded-full z-10 opacity-80 hover:opacity-100"
        >
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default BestSelling;
