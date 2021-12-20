// import { createStore, applyMiddleware } from 'redux';

const axios = require('axios');
const reduxThunk = require('redux-thunk').default;
const redux = require('redux');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;




const FUNCTION_REQUEST = 'FUNCTION_REQUEST';
const FUNCTION_SUCCESS = 'FUNCTION_SUCCESS';
const FUNCTION_ERROR = 'FUNCTION_ERROR';

const initialState = {
    loader: false,
    user: [],
    error: ''
}

const functionRequest = () => {
    return {
        type: FUNCTION_REQUEST,

    }
}
const functionSuccess = user => {
    return {
        type: FUNCTION_SUCCESS,
        payload: user
    }
}

const functionError = error => {
    return {
        type: FUNCTION_ERROR,
        payload: error
    }
}

const fetchUsers = () => {
    return (dispatch, getState) => {
        dispatch(functionRequest())

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const res = response.data.map(user => user.id)
                    .reduce((prev, curr) => prev + curr)
                dispatch(functionSuccess(res))
            })
            .catch((error) => {
                dispatch(functionError(error.message))
            })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FUNCTION_REQUEST:
            return {
                ...state,
                loader: true
            }
        case FUNCTION_SUCCESS:
            return {
                loader: false,
                user: action.payload,
                error: ''
            }
        case FUNCTION_ERROR:
            return {
                loader: false,
                user: [],
                error: action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(reduxThunk));
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers())