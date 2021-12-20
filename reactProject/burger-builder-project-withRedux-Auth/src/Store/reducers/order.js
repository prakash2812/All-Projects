import * as actionTypes from '../action/actionTypes'

const initialState = {
    orders: [],
    spinner: false,
    purchased: false
    // error: false
}
const newOrder = (action) => ({
    ...action.orderData,
    id: action.orderId
})
const order = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            }
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                spinner: true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return {
                ...state,
                orders: state.orders.concat(newOrder(action)),
                spinner: false,
                purchased: true
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                spinner: false,
                // error: action.error
            }
        default:
            return state
    }
}

export default order
