import React, { useState } from 'react'
import './UserProfile.css'
function UserProfile(props) {
    const [{ email, first_name, last_name }, setForm] = useState(() => props.selectedUser)

    const inputHandler = (e) => {
        setForm({
            [e.target.name]: e.target.value
        })
    }
    const submitForm = (e) => {
        e.preventDefault()
        setForm({})
        alert('User Successfully Submitted')

        props.history.push('/')
    }
    return (
        <div className="profile">
            <form onSubmit={submitForm}>
                <label>First name</label>
                <input type="text" name={first_name} value={first_name} onChange={inputHandler}></input>
                <br></br>
                <label>Last name</label>
                <input type="text" name={last_name} value={last_name} onChange={inputHandler}></input>
                <br></br>

                <label>E-mail</label>
                <input type="text" name={email} value={email} onChange={inputHandler}></input>
                <br></br>

                <label>Address 1</label>
                <input type="text" value={'delhi'} ></input>
                <br></br>

                <label>Address 2</label>
                <input type="text" value={'bangalore'} ></input>
                <br></br>

                <label>City</label>
                <input type="text" value={'London'} ></input>
                <br></br>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserProfile
