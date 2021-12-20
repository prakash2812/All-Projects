import React, { useState } from 'react'


const initialState = {
    name: '',
    quantity: 0
}
const AddToCart1 = () => {
    const [state, setState] = useState(() => initialState)
    // const { name, quantity, price } = state
    return (

        <div>
            <form onSubmit={e => {
                console.log('submitted');
                e.preventDefault()
                // dispatch({ type: 'add_cart', payload: { name, quantity, price } })
                // setState({ ...state, name: '', quantity: 0, price: 0 })
                console.log('done submitted');
            }}
            >
                <h2>Enter cart details:</h2>
                <label for='material'>Material:</label>
                {/* <input type='text' value={state.name}
                    onChange={(e) => setState({ name: e.target.value })} /> < br /> */}
                <label for='quantity'>Quantity:</label>
                <input type='text' value={state.quantity}
                    onChange={(e) => setState({ quantity: e.target.value })} /> <br />


                <button type='button'>Submit</button>
            </form>
        </div>
    )
}

export default AddToCart1
