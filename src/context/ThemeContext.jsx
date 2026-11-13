
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
