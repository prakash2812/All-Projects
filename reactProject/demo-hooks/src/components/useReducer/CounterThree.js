import React, { useReducer } from 'react'


const initialState = 0;
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + action.value
        case 'decrement':
            return state - action.value
        case 'refresh':
            return initialState
        default:
            return state;
    }
}
const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
    return (
        <div>
            <p>Count :{count}</p>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'refresh', })}>Refresh</button>
            <p>Count :{count2}</p>
            <button onClick={() => dispatch2({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch2({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch2({ type: 'refresh', })}>Refresh</button>
        </div>
    )
}

export default CounterThree
