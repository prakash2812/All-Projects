import React, { useState } from 'react'
import { useForm } from './useForm'

/* function UIForm2() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <input
                type='text'
                value={email}
                name='email'
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type='password'
                value={password}
                name='password'
                onChange={e => setPassword(e.target.value)}
            />

        </div>
    )
} */

// =-----------------------custom hooks used----------------------------------------------------------------

const userData = { email: '', password: '' }
function UIForm() {
    const [values, handlerChange] = useForm(userData)
    return (
        <div>
            <input
                type='text'
                value={values.email}
                name='email'
                onChange={handlerChange}
            />
            <input
                type='password'
                value={values.password}
                name='password'
                onChange={handlerChange}
            />

        </div>
    )
}


export default (UIForm)
