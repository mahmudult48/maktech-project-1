
import React from 'react';

const About = () => {
    return (
        <div className="space-y-12">

            {/* About Header */}
            <section className="bg-blue-600 text-white rounded-2xl p-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold">
                    About Our Website
                </h1>

                <p className="mt-5 text-blue-100 max-w-2xl mx-auto">
                    We are passionate about providing the best
                    products and shopping experience for our customers.
                </p>
            </section>

            {/* About Content */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div>
                    <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                        alt="Our Store"
                        className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        Who We Are
                    </h2>

                    <p className="text-gray-600 mt-5 leading-7">
                        Welcome to MyWebsite. We are an online shopping
                        platform dedicated to making your shopping
                        experience simple, easy and enjoyable.
                    </p>

                    <p className="text-gray-600 mt-4 leading-7">
                        Our goal is to provide quality products,
                        affordable prices and excellent customer service.
                    </p>
                </div>

            </section>

            {/* Mission and Vision */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
                    <h2 className="text-2xl font-bold text-gray-800">
                        🎯 Our Mission
                    </h2>

                    <p className="text-gray-600 mt-4 leading-7">
                        To provide high-quality products at affordable
                        prices and make online shopping easier for everyone.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
                    <h2 className="text-2xl font-bold text-gray-800">
                        🚀 Our Vision
                    </h2>

                    <p className="text-gray-600 mt-4 leading-7">
                        To become a trusted online shopping platform
                        by delivering the best customer experience.
                    </p>
                </div>

            </section>

        </div>
    );
};

export default About;
