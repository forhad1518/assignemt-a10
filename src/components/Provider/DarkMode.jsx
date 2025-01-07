import { createContext, useEffect, useState } from 'react';

export const DarkContext = createContext()

const DarkMode = ({ children }) => {
    const [theme, setTheme] = useState('light');
    // Toggle Theme
    const toggleTheme = () => {
        setTheme((lastTheme => (lastTheme === "light" ? "dark" : "light")))
    }

    // Change Theme
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])
    return (
        <DarkContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </DarkContext.Provider>
    );
};

export default DarkMode;