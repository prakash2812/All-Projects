import React from 'react'

const Button = ({ children }) => {
    return (
        <>
            <button onClick>{children}</button>
            <label for>{children}</label>
            <button onClick>{children}</button>
        </>
    )
}

export default Button
