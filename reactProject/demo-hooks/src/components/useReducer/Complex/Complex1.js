import React, { useReducer, useState } from 'react'

const initialState = {
    todo: [],
    todoCount: 0,
}
const Actions = {
    ADD_TODO: 'ADD_TODO',
    ADD_TOGGLE: 'ADD_TOGGLE'
}
const reducer = (state, action) => {
    switch (action.type) {
        case Actions.ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, { name: action.name, complete: false }],
                todoCount: state.todoCount + 1
            }
        case Actions.ADD_TOGGLE:
            return {
                ...state,
                todo: state.todo.map((item, idx) => idx === action.idx ? { ...item, complete: !item.complete } : item),
                // todoCount: state.todoCount
                // todo: state.todo.filter(((item, idx) => idx !== action.idx))
            }
        default: return state
    }
}

const Complex1 = () => {
    const [{ todo, todoCount }, dispatch] = useReducer(reducer, initialState)
    const [name, setName] = useState(() => '')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({ type: Actions.ADD_TODO, name })
        setName('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
            <div>Number of types: {todoCount}</div>
            {todo.map((tod, idx) => (
                <div key={tod.name}
                    onClick={() => dispatch({ type: Actions.ADD_TOGGLE, idx })}
                    style={{ textDecoration: tod.complete ? 'line-through' : '' }}
                >
                    {tod.name}
                </div>
            ))}
            {JSON.stringify(todo, null, 2)}
        </div>
    )
}

export default Complex1
