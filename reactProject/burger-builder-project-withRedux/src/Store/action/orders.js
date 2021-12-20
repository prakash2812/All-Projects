import * as actionTypes from './actionTypes'
import axios from '../../axios-orders';

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchInit())
        const fetchData = []
        axios.get("/orders.json")
            .then(res => {
                for (let key in res.data)
                    fetchData.push({
                        ...res.data[key],
                        id: key

                    })
                console.log('fetched data', fetchData);
                dispatch(fetchSuccess(fetchData))
            })
            .catch(error => {
                dispatch(fetchFail(error))
            })
    }
}

const fetchInit = () => {
    return {
        type: actionTypes.ORDERS_FETCH_INIT
    }
}
const fetchFail = (error) => {
    return {
        type: actionTypes.ORDERS_FETCH_FAIL,
        error: error
    }
}

const fetchSuccess = (ordersData) => {
    return {
        type: actionTypes.ORDERS_FETCH_SUCCESS,
        ordersData: ordersData

    }
}