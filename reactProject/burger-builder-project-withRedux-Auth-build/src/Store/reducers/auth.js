import * as actionTypes from '../action/actionTypes'
import { updateObject } from '../../Shared/utility'


const initialState = {
    token: null,
    userId: null,
    authUsers: [],
    spinner: false,
    error: null,
    authRedirect: '/',
}

const authStart = (state) => {
    return updateObject(state, {
        spinner: true,
        error: null,
    })
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        spinner: false,
        token: action.token,
        userId: action.userId,
        error: null,
        authUsers: action.credentials
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        spinner: false,
        error: action.error,
    })
}

const authLogout = (state) => {
    return updateObject(state, {
        token: null, userId: null
    })
}
const setRedirectPath = (state, action) => {
    return updateObject(state, {
        authRedirect: action.path
    })
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.AUTH_LOGOUT: return authLogout(state)
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setRedirectPath(state, action)
        default: return state
    }
}

export default authReducer