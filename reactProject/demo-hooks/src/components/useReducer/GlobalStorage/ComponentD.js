import React, { useContext } from 'react'
import { CountContext } from '../../../AppReducer'
const ComponentD = () => {
    const countContent = useContext(CountContext)
    return (
        <div>
            <button onClick={() => countContent.countDispatch('increment')}>increment</button>
            <button onClick={() => countContent.countDispatch('decrement')}>decrement</button>
            <button onClick={() => countContent.countDispatch('refresh')}>refresh</button>
        </div>
    )
}

export default ComponentD
