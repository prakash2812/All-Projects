import * as userActions from './userTypes'



const initialState = {
    loading: true,
    user: [],
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActions.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userActions.FETCH_USER_SUCCESS:
            console.log('reducer success')
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case userActions.FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                user: [],
                error: action.payload.message
            }
        default: return state
    }
}