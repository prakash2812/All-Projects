import React, { useReducer } from 'react'
import Market from '../components/MarketBoard/Market'
import Billing from '../components/BillingBoard/Billing'
import Customer from '../components/CustomerBoard/Customer'


const initialState = {
    veg: {
        tomato: '',
        Onions: ''
    },
    nonVeg: {
        chicken: '',
        motton: ''
    }
}
const reducer = (state, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,
                veg: { ...state.veg, }
            }
    }
}
const Supermarket = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <Market />
            <Billing />
            <Customer />
        </div>
    )
}

export default Supermarket
