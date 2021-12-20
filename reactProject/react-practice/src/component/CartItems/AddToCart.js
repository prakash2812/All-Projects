import React, { useState, useEffect, useReducer } from 'react'
import Form from './Form'
import Materials from './Materials'
import axios from 'axios'

const initialState = []
const reducer = (state, action) => {
    console.log('in switch case');

    switch (action.type) {
        case 'add_cart':
            return [
                ...state,
                newCart(action.payload)
            ]
        default:
            return state
    }

}
const newCart = ({ name, quantity, price }) => {
    return {
        name,
        quantity,
        price
    }
}
const AddToCart = () => {
    const [state1, dispatch] = useReducer(reducer, initialState)
    const [fetch, setFetch] = useState(() => ([]))
    let fetchData = null;
    const showResults = () => {
        console.log('inside hadler');
        axios.get('https://burger-builder-project-2515d.firebaseio.com/materialData.json')
            .then(res => {
                fetchData = []
                console.log(res);
                console.log(res.data);
                for (let key in res.data) {
                    console.log('start for loop');
                    fetchData.push({
                        ...res.data[key]
                    })
                    console.log('end for loop');
                }
                setFetch(fetchData)
                console.log('stored Data', fetchData);
                // fetchData.map((item, idx) => {
                //     console.log('inside map');
                //     return <Materials key={idx} item={item} />
                // })
                console.log('fetchdata map end');
            })
            .catch(error => error.message)
    }
    console.log('render add to cart');
    return (
        <div>


            {/* {state1.map((item, idx) => {
                return <Materials key={idx} item={item} />
            })} */}
            <Form dispatch={dispatch} data={state1} />
            <h2>Show added cart Details:</h2>
            <button onClick={showResults} >Show materials</button>

            {fetch ? fetch.map((item, idx) => {
                console.log('render map loop');
                return <Materials key={idx} item={item} />
            }) : null}

        </div>
    )
}

export default AddToCart
