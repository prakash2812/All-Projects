import React, { useState, useEffect } from 'react'
import { Route, NavLink, Switch, withRouter } from 'react-router-dom'
import axios from 'axios'
import UserList from '../Users/UserList'
import UserProfile from '../Users/UserProfile'
import './Body.css'
function Body(props) {
    const [data, setData] = useState(() => [])
    const [selectedUser, setSelectedUser] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                console.log("res", res.data.data)
                setData(res.data.data)
            })
            .catch(e => {
                alert(e.message)
            })
    }, [])

    const getUser = (item) => {
        setSelectedUser(item);
        props.history.push('/user-profile')
    }
    return (
        <div className='Body'>
            <header>
                <main>
                    <ul>
                        <li><NavLink to="/"
                            exact
                        ><strong>UserList</strong></NavLink></li>
                        <li><NavLink to="/user-profile"
                        ><strong>UserProfile</strong></NavLink></li>
                        <hr></hr>
                    </ul>
                </main>
            </header>
            <Switch>
                <Route path='/' exact render={(props) => <UserList data={data} getUser={getUser} {...props} />} />
                <Route path='/user-profile' render={(props) => <UserProfile selectedUser={selectedUser} {...props}></UserProfile>} />
            </Switch>


        </div >
    )
}

export default withRouter(Body)
