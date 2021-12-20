import React, { useState, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    name: '',
    quantity: 0,
    price: 0
}

const Form = ({ dispatch, data }) => {
    // const [state, dispatch] = useReducer(reducer, initialState)
    const [state, setState] = useState(() => initialState)
    const { name, quantity, price } = state
    // const myEffect = useEffect(() => {
    //     axios.post('https://burger-builder-project-2515d.firebaseio.com/maaterialData.json', ...data)
    //         .then(res => {
    //             console.log('Form Submitted');
    //         }).catch(error => {
    //             console.log("Failed due to ", error.message);
    //         })
    // }, [data])

    const materialHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        state[name] = value
        setState({ ...state })
    }

    const submitHandler = e => {

        console.log('inside submitted');
        e.preventDefault()
        dispatch({ type: 'add_cart', payload: { name, quantity, price } })
        console.log('dispatched data', state);
        axios.post('https://burger-builder-project-2515d.firebaseio.com/materialData.json', state)
            .then(res => {
                console.log('Form Submitted');
            }).catch(error => {
                console.log("Failed due to ", error.message);
            })
        setState({ ...state, name: '', quantity: 0, price: 0 })


        console.log('done submitted');
    }
    console.log('render form');
    return (
        <div>
            <form onSubmit={submitHandler}
            >
                <h2>Enter cart details:</h2>
                <label htmlFor='material'>Material:</label>
                <input type='text' value={name} name='name'
                    onChange={materialHandler} /> <br />

                <label htmlFor='quantity'>Quantity:</label>
                <input type='text' value={quantity} name='quantity'
                    onChange={materialHandler} /> <br />

                <label htmlFor='price'>Price:</label>
                <input type='text' value={price} name='price'
                    onChange={materialHandler} /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
