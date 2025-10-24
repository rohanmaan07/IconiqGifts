import React from "react";
import { Link } from "react-router-dom";
import { categoryData} from "../NavData/CategoryData";

const Category = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-6xl font-caveat font-bold text-center text-gray-800 mb-3">
          Categories
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categoryData.map((gift, index) => (
            <Link
              key={index}
              to={gift.route}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 block"
            >
              <div className="overflow-hidden">
                <img
                  src={gift.image}
                  alt={gift.title}
                  className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mt-3">
                  {gift.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
