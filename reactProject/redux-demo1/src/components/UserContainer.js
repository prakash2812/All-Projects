import React, { useEffect, useState } from 'react'
import { fetchUser } from '../redux/user/userActions'
import { connect, useSelector, useDispatch } from 'react-redux'

function UserContainer({ userData, fetchUserData }) {

    // const userData = useSelector((state) => state.user)
    // const dispatch = useDispatch()
    const [id, setId] = useState(() => 1);

    useEffect(() => {
        fetchUserData(id)
        // dispatch(fetchUser())
    }, [id])

    return console.log('rendering', userData) || (
        <>
            {
                userData.loading ? <h2>'loading...'</h2> : userData.error ?
                    <h2>{userData.error}</h2> : (
                        <div>
                            <h2>user list</h2>
                            {userData?.user?.name}
                            {/* {userData?.user?.map(item => <p key={item.id}>{item.id}</p>)} */}
                        </div>
                    )
            }
            <button onClick={() => setId((state) => state + 1)}>user {id} data</button>
            {/* {JSON.stringify(userData?.user)} */}
        </>

    )
}

const mapStateToProps = (state) => console.log('state') || ({
    userData: state.user
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserData: (id) => dispatch(fetchUser(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
