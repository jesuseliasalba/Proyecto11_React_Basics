import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

const initialTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : window.matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark";

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = () => {
        if (theme === "dark") {
            setTheme("")            
        } else {
            setTheme("dark")
        }
    }

    useEffect(() => {

        document.body.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme ? theme : "light")

    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, handleTheme}} >{children}</ThemeContext.Provider>
    )
}

export { ThemeProvider };
export default ThemeContext;