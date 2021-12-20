import React, { useState, useEffect } from 'react'

const userData = { firstName: '', lastName: '', age: null, salary: null }

function Concise() {
    //Custom Hook with useForm
    const useForm = (initialState) => {
        console.log(initialState)
        const [values, setEmployee] = useState(() => initialState)
        return [
            values,
            e => setEmployee({
                ...values,
                [e.target.name]: e.target.value
            })
        ]
    }

    //custom hook applied here
    const [employee, inputHandler] = useForm(userData)

    // Make form with single time written using map
    const data = Object.keys(employee).map(item => {
        return (
            <form>
                <label>{item}:</label>
                <input type='text' name={item} value={employee[item]} onChange={inputHandler}></input>
            </form>
        )
    })

    //Make show form as dynamic and concise using map
    const showData = Object.keys(employee).map(item => {
        return (
            <p>Entered {item}:<b>{employee[item]}</b><br></br></p>
        )
    })
    return (
        <div>
            {data}
            {showData}
            {JSON.stringify(employee)}
        </div>
    )
}

export default Concise