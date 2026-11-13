
import React from 'react';
import { useParams, Link } from 'react-router';

const ProductDetails = () => {

    const { id } = useParams();

    return (
        <div className="bg-gray-50 min-h-screen py-12">

            <div className="max-w-7xl mx-auto px-5">

                {/* Back Button */}
                <Link
                    to="/product"
                    className="inline-block mb-8 text-green-600 font-semibold hover:text-green-700"
                >
                    ← Back to Products
                </Link>

                {/* Product Details Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* Product Image */}
                        <div className="bg-gray-50 rounded-xl p-8">
                            <img
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
                                alt="Product"
                                className="w-full h-[350px] object-contain"
                            />
                        </div>

                        {/* Product Information */}
                        <div>

                            <p className="text-green-600 font-semibold mb-3">
                                Product Category
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Product Details
                            </h2>

                            <p className="text-gray-500 mb-4">
                                Product ID: {id}
                            </p>

                            <p className="text-gray-600 leading-7 mb-6">
                                This is a beautiful and high-quality product.
                                It is designed with modern features and provides
                                a great experience for everyday use.
                            </p>

                            {/* Price */}
                            <div className="flex items-center gap-4 mb-6">

                                <h3 className="text-3xl font-bold text-green-600">
                                    ৳2,499
                                </h3>

                                <del className="text-gray-400 text-lg">
                                    ৳3,499
                                </del>

                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-yellow-500 text-xl">
                                    ★★★★★
                                </span>

                                <span className="text-gray-500 text-sm">
                                    (4.8 Rating)
                                </span>
                            </div>

                            {/* Stock */}
                            <p className="text-green-600 font-semibold mb-6">
                                In Stock
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4">

                                <button className="btn bg-green-600 hover:bg-green-700 text-white border-none px-8 rounded-lg">
                                    Add to Cart
                                </button>

                                <button className="btn bg-gray-800 hover:bg-gray-900 text-white border-none px-8 rounded-lg">
                                    Buy Now
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductDetails;
