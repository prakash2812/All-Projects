import React, { useReducer } from 'react'


const initialState = {
    firstCount: 0,
    secondCount: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCount: state.firstCount + action.value }
        case 'decrement':
            return { ...state, firstCount: state.firstCount - action.value }
        case 'increment2':
            return { ...state, secondCount: state.secondCount + action.value }
        case 'decrement2':
            return { ...state, secondCount: state.secondCount - action.value }
        case 'refresh':
            return initialState
        default:
            return state;
    }
}
const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>Count :{count.firstCount}</p>
            <p>Count :{count.secondCount}</p>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement5</button>
            <button onClick={() => dispatch({ type: 'refresh', })}>Refresh</button>


            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment counter 2 </button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement counter 2</button>
        </div>
    )
}

export default CounterTwo
