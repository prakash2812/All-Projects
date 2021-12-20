import * as actionTypes from './actionTypes'
import axios from 'axios'
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.min.css'

// toast.configure()
const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
const authSuccess = (userData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        data: userData
    }
}
const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    localStorage.removeItem('localId')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

const checkAuthTimeOut = (timeOut) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, timeOut * 1000)
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        path,
        type: actionTypes.SET_AUTH_REDIRECT_PATH,

    }
}
export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-m_iTYhcJU6VfI7yvW1FwlqI_qVbZfng'
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-m_iTYhcJU6VfI7yvW1FwlqI_qVbZfng'
        }
        axios.post(url, authData)
            .then(res => {
                // console.log('res--', res);
                // console.log('res -- data', res.data);
                const expirationTime = new Date(new Date().getTime() + res.data.expiresIn * 1000)
                localStorage.setItem('localId', res.data.localId);
                localStorage.setItem('expirationTime', expirationTime);
                localStorage.setItem('token', res.data.idToken);

                dispatch(authSuccess(res.data))
                dispatch(checkAuthTimeOut(res.data.expiresIn))
                /* if (res.data.registered) {
                    toast.success('LogedIn Sucessfully..', { autoClose: 4000 })
                } else {
                    toast.success('Registered Sucessfully..', { autoClose: 4000 })
                } */
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error))
                // const message = err.response.data.error.message

                /* toast.error(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                }) */
            })
    }
}

export const authCheckState = () => {
    // console.log("auth Check State");
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationTime = new Date(localStorage.getItem('expirationTime'))
            if (expirationTime > new Date()) {
                const localId = localStorage.getItem('localId')
                const data = { token, localId }
                dispatch(authSuccess(data))
                dispatch(checkAuthTimeOut((expirationTime.getTime() - new Date().getTime()) / 1000))
            } else {
                dispatch(logout())
            }
        }
    }
}