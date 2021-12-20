import React, { memo } from 'react'

const Button = ({ children, handleClick }) => {
    console.log(`Rendering button - ${children}`);
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
            {/* <button onClick={salary}>{children}</button> */}

        </div>
    )
}

export default memo(Button)
