import React, { memo } from 'react'

const Counter = ({ text, count }) => {
    console.log(`Rendering ${text}`);
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default memo(Counter)
