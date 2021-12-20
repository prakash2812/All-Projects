import React, { useReducer, useEffect } from 'react'
import Axios from 'axios'

const initialState = {
    loading: true,
    post: {},
    error: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'Request':
            return {
                ...state,
                loading: true,
            }
        case 'Success':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'Error':
            return {
                ...state,
                loading: false,
                post: {},
                error: 'Something went wrong!!'
            }
        default: return state
    }
}

const SubTest = () => {
    const [state, dispatch] = useReducer(reducer, initialState,)
    const { loading, post, error } = state
    useEffect(() => {
        dispatch({ type: 'Request' })
        Axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'Success', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'Error' })
            })
    }, [])

    return (
        <div>
            {loading ? <h1>Loading..</h1> : JSON.stringify(post.title)}
            {error ? error : null}
        </div>
    )
}

export default SubTest
