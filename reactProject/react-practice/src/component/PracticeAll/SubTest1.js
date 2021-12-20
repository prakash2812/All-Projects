import React, { useContext } from 'react'
import { useTheme, useUpdateTheme } from './SubTest';

const themeStyles = (dark) => ({
    backgroundColor: dark ? '#333' : '#ccc',
    color: dark ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
})
const FunctionContextComponent = () => {
    const { theme, update } = useTheme()
    // const updateDarkTheme = useUpdateTheme()
    return (
        <>
            <button
                onClick={update}>Toggle Button
        </button>
            <button
                style={themeStyles(theme)}>Function class
        </button>
        </>
    )
}

export default FunctionContextComponent
