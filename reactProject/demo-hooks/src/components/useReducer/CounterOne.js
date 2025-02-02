import React, { useReducer } from 'react'


const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state => state + 1
        case 'decrement':
            return state => state - 1
        case 'refresh':
            return initialState
        default:
            return state;
    }
}
const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>Count :{count}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('refresh')}>Refresh</button>
        </div>
    )
}

export default CounterOne
