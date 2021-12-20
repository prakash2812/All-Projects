import React, { useState } from 'react';
import Salary from './Salary';
function Employee() {
    const [employee, setEmployeeInfo] = useState(() => ({ id: '', name: '', location: '', salary: '' }));
    // const [id,name,location,salary] = employee
    const changeData = (event) => {
        setEmployeeInfo({ ...employee, [event.target.name]: event.target.value })
    }



    return (
        <div>
            <h2></h2>
            <p>
                <label for="id">Employee id:
                    <input type="text" name='id' value={employee.id} onChange={changeData} />
                </label>
            </p>
            <p>
                <label for="name">Employee Name:
                    <input type="text" name='name' value={employee.name} onChange={changeData} />
                </label>
            </p>
            <p>
                <label for="location">Employee Location:
                    <input type="text" name='location' value={employee.location} onChange={changeData} />
                </label>
            </p>
            <p>
                <label for="salary">Employee salary:
                    <input type="text" name='salary' value={employee.salary} onChange={changeData} />
                </label>
            </p>
            <p>
                Entered id: <b>{employee.id}</b> <br></br>
                Entered Name: <b>{employee.name}</b> <br></br>
                Entered Location: <b>{employee.location}</b> <br></br>
                Entered salary: <b>{employee.salary}</b> <br></br>

            </p>
            <Salary salary={employee.salary} changeSalary={changeData}></Salary>
        </div>
    )
}

export default Employee;
