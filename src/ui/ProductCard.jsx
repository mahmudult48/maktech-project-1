import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({product}) => {
  return (
    <Link to={`/product/${product.id}`}>
      
      <div>
                   <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-60 object-cover"
                        />

                        <div className="p-5">

                            <p className="text-sm text-blue-600">
                                {product.category}
                            </p>

                            <h2 className="text-xl font-bold text-gray-800 mt-2">
                                {product.name}
                            </h2>

                            <div className="flex justify-between items-center mt-4">
                                <p className="text-2xl font-bold text-blue-600">
                                    ${product.price}
                                </p>

                                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                                    Buy Now
                                </button>
                            </div>

                        </div>
                    </div>
    </div>

    </Link>
    
  );
};

export default ProductCard;