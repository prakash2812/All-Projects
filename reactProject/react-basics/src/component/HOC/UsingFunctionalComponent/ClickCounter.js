import React from 'react'
import HOC from './HOC'


function ClickCounter(props) {
    const { count, increment, name } = props
    return (
        <div>
            <button onClick={increment}>{name}Clicked {count} times</button>
        </div>
    )
}

export default HOC(ClickCounter)

