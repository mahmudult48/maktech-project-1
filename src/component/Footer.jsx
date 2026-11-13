
import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16">

            <div className="max-w-7xl mx-auto px-5 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo & Description */}
                    <div>
                        <h2 className="text-2xl font-bold text-blue-400">
                            MyWebsite
                        </h2>

                        <p className="text-gray-400 mt-4 leading-7">
                            Discover amazing products at affordable prices.
                            We provide quality products and the best
                            shopping experience for everyone.
                        </p>

                        <div className="flex gap-4 mt-5 text-xl">
                            <a href="#" className="hover:text-blue-400">
                                <FaFacebookF />
                            </a>

                            <a href="#" className="hover:text-pink-400">
                                <FaInstagram />
                            </a>

                            <a href="#" className="hover:text-sky-400">
                                <FaTwitter />
                            </a>

                            <a href="#" className="hover:text-gray-300">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link to="/" className="hover:text-blue-400">Home</Link>
                            </li>
                            <li>
                                <Link to="/product" className="hover:text-blue-400">Product</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-blue-400">About</Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Support
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-blue-400">Help Center</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Contact Us
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>📍 Dhaka, Bangladesh</li>
                            <li>📧 info@mywebsite.com</li>
                            <li>📞 +880 1234-567890</li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2026 MyWebsite. All rights reserved.
                    </p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
