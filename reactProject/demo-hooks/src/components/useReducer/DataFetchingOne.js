import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios'

const initialState = {
    loading: false,
    user: {},
    error: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {
                ...state,
                loading: action.payload
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
const DataFetchingOne = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({ type: 'FETCH_REQUEST', payload: !initialState.loading })

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log('response came');
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(error => {
                console.log('error came');
                dispatch({ type: 'FETCH_ERROR', payload: error.message })
            })
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>
            {/* {state.loading ? 'loading..' : JSON.stringify(state.user)} */}
            {/* {state.error ? error.message : JSON.stringify(state.user)} */}

            {JSON.stringify(state.user.title)}
        </div>
    )
}

export default DataFetchingOne
