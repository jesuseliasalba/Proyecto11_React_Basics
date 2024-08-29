import React, { createContext, useState } from 'react'

const ThemeContext = createContext();

const initialTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark";

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = () => {
        if (theme === "dark") {
            setTheme("")            
        } else {
            setTheme("dark")
        }
    }

    const data = {theme, handleTheme}

    return (
        <ThemeContext.Provider value={data} >{children}</ThemeContext.Provider>
    )
}

export { ThemeProvider };
export default ThemeContext;