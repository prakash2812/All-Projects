import React from 'react'
import { Actions } from './Complex2'


const Toggle = ({ dispatch, todo }) => {
    return (
        <div>
            {/* <div key={item}>{item.name}</div> */}
            <span style={{ color: todo.complete ? '#ccc' : '#333' }}>{todo.name}</span>
            <button onClick={() => dispatch({ type: Actions.ADD_TOGGLE, payload: { id: todo.id } })}>Toggle</button>
            <button onClick={() => dispatch({ type: Actions.REMOVE_TOGGLE, payload: { id: todo.id } })}>Delete</button>
        </div >
    )
}

export default Toggle
