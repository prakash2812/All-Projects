import React, { useState, useContext } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export const useUpdateTheme = () => {
    return useContext(ThemeUpdateContext)
}
export const useTheme = () => {
    return useContext(ThemeContext)
}


export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(() => true)
    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme)
    }
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>

        /*  <ThemeContext.Provider value={{ theme: darkTheme, update: toggleTheme }}>
             {children}
         </ThemeContext.Provider> */
    )
}
