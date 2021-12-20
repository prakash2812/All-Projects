import React from 'react'
import { NavLink } from 'react-router-dom'
import './UserList.css'
function UserList(props) {

    const header = ['name', 'age', 'NickName', 'Employee']
    const headerData = header.map(item => (
        <th key={item}>{item}</th>
    ))

    const bodyData = props.data.map(item => (

        // <Link to="/user-profile">
        <tr key={item.id} onClick={() => props.getUser(item)}>
            {/* <NavLink to="/user-profile"> */}
            <td>{item.first_name}</td>
            <td>{item.id}</td>
            <td>{item.last_name}</td>
            <td><input type='checkbox'></input></td>
            {/* </NavLink > */}
        </tr >
        // </Link >
    ))
    return (
        <div className='table'>
            <table style={{ width: '100%' }}>
                <thead >
                    <tr>
                        {headerData}
                    </tr>
                </thead>
                <tbody>
                    {bodyData}
                </tbody>
            </table>
        </div>
    )
}

export default UserList
