
import React from 'react';
  
import ProductCard from '../../ui/ProductCard';

const Product = () => {

    const products = [
        {
            id: 1,
            name: 'Wireless Headphone',
            price: 120,
            category: 'Electronics',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
        },
        {
            id: 2,
            name: 'Smart Watch',
            price: 90,
            category: 'Accessories',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
        },
        {
            id: 3,
            name: 'Digital Camera',
            price: 250,
            category: 'Electronics',
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500'
        },
        {
            id: 4,
            name: 'Running Shoes',
            price: 75,
            category: 'Fashion',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'
        },
        {
            id: 5,
            name: 'Backpack',
            price: 55,
            category: 'Fashion',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'
        },
        {
            id: 6,
            name: 'Sunglasses',
            price: 40,
            category: 'Accessories',
            image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500'
        }
    ];

    return (
        
      

<div>

            {/* Page Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">
                    Our Products
                </h1>

                <p className="text-gray-500 mt-3">
                    Explore our latest collection
                </p>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

                {products.map(product => (
                    <ProductCard key={product.is} product={product}></ProductCard>
                ))}

            </div>
        </div>


    );
};

export default Product;
