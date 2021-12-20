import * as userActions from './userTypes'
import axios from 'axios'

const fetchRequest = () => {
    return {
        type: userActions.FETCH_USER_REQUEST
    }
}
const fetchSuccess = (user) => {
    return {
        type: userActions.FETCH_USER_SUCCESS,
        payload: user
    }
}
const fetchError = (error) => {
    return {
        type: userActions.FETCH_USER_ERROR,
        payload: error
    }
}

/* export const fetchUser = (id) => {
    return async (dispatch) => {
        dispatch(fetchRequest())
        const data = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        try {
            console.log(data.data)
            dispatch(fetchSuccess(data.data))
            console.log('inside aync')
        } catch (e) {
            dispatch(fetchError(e))
        }
    }
} */

export const fetchUser = (id) => {
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                // console.log(res.data)
                console.log('success start')
                dispatch(fetchSuccess(res.data))
                console.log('success end')
            })
            .catch(e => {
                dispatch(fetchError(e)) //
            })
        console.log('fetch user end')
    }
} 
