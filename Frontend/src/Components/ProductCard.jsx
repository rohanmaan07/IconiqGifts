// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/contact');
//   };

//   return (
//     <div
//       onClick={handleClick} 
//       className="relative w-full max-w-xs bg-white rounded-xl shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer mx-auto"
//     >
//       <div className="relative w-full h-60 sm:h-72 overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
//         />
//         <img
//           src={product.hoverImage}
//           alt={product.name}
//           className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out"
//         />
//       </div>

//       <div className="p-4 flex flex-col bg-white">
//         <h3
//           className="text-gray-700 font-semibold text-base h-12 line-clamp-2 mb-2"
//           title={product.name}
//         >
//           {product.name}
//         </h3>

//         <p className="text-xl font-extrabold text-gray-900 mt-auto">
//           ₹ {product.price}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import React from 'react';
// useNavigate ki jagah hum 'Link' component use karenge, yeh navigation ke liye best practice hai
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (

    <Link
      to={`/product/${product.id}`}
      className="group relative block w-full max-w-xs bg-white rounded-xl shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 ease-in-out overflow-hidden mx-auto"
    >
      <div className="relative w-full h-60 sm:h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <img
          src={product.hoverImage}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
        />
      </div>

      <div className="p-4 flex flex-col bg-white">
        <h3
          className="text-gray-700 font-semibold text-base h-12 line-clamp-2 mb-2"
          title={product.name}
        >
          {product.name}
        </h3>

        <p className="text-xl font-extrabold text-gray-900 mt-auto">
          ₹ {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;

