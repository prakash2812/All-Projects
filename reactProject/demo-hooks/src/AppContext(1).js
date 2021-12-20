import React, { useState } from 'react'
import ClassContextComponent from './components/useContext/Complex/ClassContextComponent'
import FunctionContextComponent from './components/useContext/Complex/FunctionContextComponent'
import { ThemeProvider } from './components/useContext/Complex/ThemeContext'

// export const ThemeContext = React.createContext()
const AppContext = () => {
    // const [darkTheme, setDarkTheme] = useState(() => true)
    // const toggleTheme = () => {
    //     setDarkTheme(prevTheme => !prevTheme)
    // }
    return (
        // <ThemeContext.Provider value={darkTheme}>
        //     <button onClick={toggleTheme}>Toggle Button</button>
        //     <ClassContextComponent />
        <ThemeProvider >
            <FunctionContextComponent />
        </ThemeProvider>
        // </ThemeContext.Provider>

    )
}

export default AppContext
