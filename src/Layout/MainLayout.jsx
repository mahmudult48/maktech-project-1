
import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';
import { ThemeContext } from '../context/ThemeContext';

const MainLayout = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen ${
            theme === 'light'
                ? 'bg-white text-gray-800'
                : 'bg-gray-900 text-white'
        }`}>

            <Navbar />

            <Outlet />

        </div>
    );
};

export default MainLayout;
