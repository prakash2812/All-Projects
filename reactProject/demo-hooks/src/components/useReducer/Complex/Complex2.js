import React, { useReducer, useState } from 'react'
import Toggle from './Toggle'

export const Actions = {
    ADD_TODO: 'ADD_TODO',
    ADD_TOGGLE: 'ADD_TOGGLE',
    REMOVE_TOGGLE: 'REMOVE_TOGGLE'
}
const initilaState = []
const reducer = (state, action) => {
    switch (action.type) {
        case Actions.ADD_TODO:
            return [
                ...state, newItem(action.payload.name)
            ]

        case Actions.ADD_TOGGLE:
            return state.map(item => item.id === action.payload.id ? { ...item, complete: !item.complete } : item)

        case Actions.REMOVE_TOGGLE:
            return state.filter(item => item.id !== action.payload.id)
    }

}

const newItem = (name) => {
    return {
        name,
        id: Date.now(),
        complete: false

    }
}
const Complex2 = () => {

    const [todo, dispatch] = useReducer(reducer, initilaState)
    const [name, setName] = useState(() => '')
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({ type: Actions.ADD_TODO, payload: { name } })
        setName('')
    }
    console.log(todo);
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>

            {todo.map(item => (
                <Toggle key={item.id} todo={item} dispatch={dispatch} />
                // <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}

export default Complex2
