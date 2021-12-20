import React from 'react'
import HOC from './HOC'


function HoverCounter({ count, increment }) {
    return (
        <div>
            <button onMouseOver={increment}>Hover {count} times</button>
        </div>
    )
}

export default HOC(HoverCounter)
