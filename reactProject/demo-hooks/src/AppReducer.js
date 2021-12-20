import React, { useReducer } from 'react'
import ComponentA from './components/useReducer/GlobalStorage/ComponentA'
import ComponentC from './components/useReducer/GlobalStorage/ComponentC'
import ComponentB from './components/useReducer/GlobalStorage/ComponentB'

export const CountContext = React.createContext()
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'refresh':
            return initialState;

        default:
            return state;
    }
}
const AppReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>COunter :{count}</p>
            <CountContext.Provider value={{ counterState: count, countDispatch: dispatch }}>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </CountContext.Provider>
        </div>
    )
}

export default AppReducer
