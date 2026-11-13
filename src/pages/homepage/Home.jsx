
import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    const products = [
        {
            id: 1,
            name: 'Wireless Headphone',
            price: 120,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
        },
        {
            id: 2,
            name: 'Smart Watch',
            price: 90,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
        },
        {
            id: 3,
            name: 'Camera',
            price: 250,
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500'
        }
    ];

    return (
        <div className="space-y-16">

            {/* Hero Section */}
            <section className="bg-blue-600 rounded-2xl p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Discover Your Favorite Products
                    </h1>

                    <p className="mt-5 text-blue-100">
                        Find the best products at affordable prices.
                        Quality products and amazing shopping experience.
                    </p>

                    <Link
                        to="/product"
                        className="inline-block mt-7 bg-white text-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100"
                    >
                        Shop Now
                    </Link>
                </div>

                <div className="text-8xl md:text-9xl">
                    🛍️
                </div>
            </section>

            {/* Featured Products */}
            <section>
                <div className="flex justify-between items-center mb-7">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Featured Products
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Explore our popular products
                        </p>
                    </div>

                    <Link to="/product" className="text-blue-600 font-semibold">
                        View All →
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="bg-white rounded-xl shadow-md p-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-56 object-cover rounded-lg"
                            />

                            <h3 className="text-xl font-semibold mt-4 text-gray-800">
                                {product.name}
                            </h3>

                            <p className="text-blue-600 font-bold mt-2">
                                ${product.price}
                            </p>

                            <Link
                                to="/product"
                                className="block text-center bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700"
                            >
                                View Products
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">
                    Why Choose Us?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-7 rounded-xl shadow">
                        <div className="text-4xl">🚚</div>
                        <h3 className="font-bold text-xl mt-3">Fast Delivery</h3>
                        <p className="text-gray-500 mt-2">Fast and safe delivery service.</p>
                    </div>

                    <div className="bg-white p-7 rounded-xl shadow">
                        <div className="text-4xl">⭐</div>
                        <h3 className="font-bold text-xl mt-3">Best Quality</h3>
                        <p className="text-gray-500 mt-2">We provide quality products.</p>
                    </div>

                    <div className="bg-white p-7 rounded-xl shadow">
                        <div className="text-4xl">💳</div>
                        <h3 className="font-bold text-xl mt-3">Secure Payment</h3>
                        <p className="text-gray-500 mt-2">Safe and secure payments.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
