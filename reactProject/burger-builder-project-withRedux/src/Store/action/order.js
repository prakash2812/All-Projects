import * as actionTypes from './actionTypes'
import axios from '../../axios-orders';


export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderData: orderData,
        orderId: id
    }
}
export const purchaseBurgerfail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}
const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}
export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
                // console.log(response)
                // this.setState({ spinner: false })
                // this.props.history.push('/')
                // return prompt('Ordered placed sucessfully')
            })
            .catch(error => {
                dispatch(purchaseBurgerfail(error))
                // this.setState({ spinner: false })
            })
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT

    }
}