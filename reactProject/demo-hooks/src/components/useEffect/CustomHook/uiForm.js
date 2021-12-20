import React, { useState } from 'react'
import { useForm } from './useForm'
import Hello from './Hello'

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

// =-----------------------   custom hooks used    ----------------------------------------------------------------

const userData = { email: '', password: '', firstName: '' }
function UIForm() {
    const [values, handlerChange] = useForm(() => userData)
    const [display, setDisplay] = useState(() => true)

    React.useEffect(() => {
        console.log('effected run');
        return () => {
            console.log('Top clean up run i.e., unmounting');
        }
    }, [values])

    React.useEffect(() => {
        console.log('Mount 1');
        return () => {
            console.log('Mount 1 clean up run i.e., unmounting');
        }
    }, [values])

    React.useEffect(() => {
        console.log('Mount 2');
        return () => {
            console.log('Mount 2 clean up run i.e., unmounting');
        }
    }, [values])
    return (

        <div>
            <button onClick={() => setDisplay(!display)}>Toggle here</button>
            {display && < Hello />}

            <input
                type='text'
                value={values.email}
                name='email'
                onChange={handlerChange}
            />

            <input type='text'
                value={values.firstName}
                name='firstName'
                placeholder='First Name'
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
