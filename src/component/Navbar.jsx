
import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {

    const { theme, handleTheme } = useContext(ThemeContext);

    const navLinks = (
        <>
            <li>
                <NavLink to="/" end
                    className={({ isActive }) =>
                        `px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                            isActive
                                ? "bg-green-600 text-white shadow-md"
                                : theme === 'light'
                                    ? "text-gray-600 hover:bg-green-50 hover:text-green-600"
                                    : "text-gray-200 hover:bg-gray-700 hover:text-green-400"
                        }`
                    }>
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/product"
                    className={({ isActive }) =>
                        `px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                            isActive
                                ? "bg-green-600 text-white shadow-md"
                                : theme === 'light'
                                    ? "text-gray-600 hover:bg-green-50 hover:text-green-600"
                                    : "text-gray-200 hover:bg-gray-700 hover:text-green-400"
                        }`
                    }>
                    Product
                </NavLink>
            </li>

            <li>
                <NavLink to="/about"
                    className={({ isActive }) =>
                        `px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                            isActive
                                ? "bg-green-600 text-white shadow-md"
                                : theme === 'light'
                                    ? "text-gray-600 hover:bg-green-50 hover:text-green-600"
                                    : "text-gray-200 hover:bg-gray-700 hover:text-green-400"
                        }`
                    }>
                    About
                </NavLink>
            </li>

            <li>
                <NavLink to="/dashboard"
                    className={({ isActive }) =>
                        `px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                            isActive
                                ? "bg-green-600 text-white shadow-md"
                                : theme === 'light'
                                    ? "text-gray-600 hover:bg-green-50 hover:text-green-600"
                                    : "text-gray-200 hover:bg-gray-700 hover:text-green-400"
                        }`
                    }>
                    Dashboard
                </NavLink>
            </li>
        </>
    );

    return (
        <header className={`shadow-sm sticky top-0 z-50 ${
            theme === 'light' ? 'bg-white' : 'bg-gray-900'
        }`}>

            <div className="max-w-7xl mx-auto px-5 min-h-20 flex justify-between items-center">

                {/* Logo */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-600">
                        MyWebsite
                        <span className={theme === 'light' ? 'text-gray-800' : 'text-white'}>
                            .
                        </span>
                    </h2>
                </div>

                {/* Navigation Menu */}
                <div className="hidden md:flex items-center">
                    <ul className="flex items-center gap-2">
                        {navLinks}
                    </ul>
                </div>

                {/* Theme and Login Button */}
                <div className="flex items-center gap-3">

                    <button
                        onClick={handleTheme}
                        className={`btn btn-circle btn-ghost text-xl ${
                            theme === 'light' ? 'text-gray-700' : 'text-white'
                        }`}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>

                    <button className="btn bg-green-600 hover:bg-green-700 text-white border-none rounded-full px-7">
                        Login
                    </button>

                </div>

            </div>

        </header>
    );
};

export default Navbar;
