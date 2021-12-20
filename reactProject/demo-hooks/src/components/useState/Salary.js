import React from 'react'

function Salary({ changeSalary, salary }) {
    return (
        <>
            <h2> Salary Component</h2>
            <p>
                <label for="salary">Employee salary:
                    <input type="text" name='salary' value={salary} onChange={changeSalary} />
                </label>
            </p>
        </>
    )
}

export default Salary
