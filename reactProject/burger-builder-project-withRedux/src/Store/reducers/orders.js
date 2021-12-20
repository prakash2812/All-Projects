import React from 'react'
import * as actionTypes from '../action/actionTypes'
const initialState = {
    orders: [],
    spinner: false,
    error: false
}
const orders = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ORDERS_FETCH_INIT:
            return {
                ...state,
                spinner: true
            }
        case actionTypes.ORDERS_FETCH_SUCCESS:
            return {
                ...state,
                orders: action.ordersData,
                spinner: false
            }
        case actionTypes.ORDERS_FETCH_FAIL:
            return {
                ...state,
                spinner: false,
                error: true
            }
        default:
            return state
    }
}

export default orders
