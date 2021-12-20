import React, { useContext } from 'react'
import { useTheme, useUpdateTheme } from './ThemeContext';

const themeStyles = (dark) => ({
    backgroundColor: dark ? '#333' : '#ccc',
    color: dark ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
})
const FunctionContextComponent = () => {
    const darkTheme = useTheme()
    // we want one provider to use multiple values at a time , so destructuring the objects
    // const { theme, update } = useTheme()

    const updateDarkTheme = useUpdateTheme()
    return (
        <>
            <button
                onClick={updateDarkTheme}>Toggle Button
        </button>
            <button
                style={themeStyles(darkTheme)}>Function class
        </button>
        </>

        /*  <>
             <button
                 onClick={update}>Toggle Button
         </button>
             <button
                 style={themeStyles(theme)}>Function class
         </button>
         </> */
    )
}

export default FunctionContextComponent
