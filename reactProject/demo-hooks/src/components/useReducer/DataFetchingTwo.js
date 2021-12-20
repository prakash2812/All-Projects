import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const DataFetchingTwo = () => {
    // const [data, setData] = useState(() => ({}))
    // const [loader, setLoader] = useState(() => true)
    // const [error, setError] = useState(() => '')
    const [user, setUser] = useState(() => ({ loader: true, data: {}, error: '' }))
    useEffect(() => {
        console.log('inside effect');
        Axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log('inside response', response.data);
                console.log(response);
                setUser({
                    ...user,
                    loader: !user.loader,
                    data: response.data

                })
                // setLoader(prevLoader => !prevLoader)
                // console.log('loader done');
                // setData(response.data);
                // console.log('set response done');
                // setError('')
                // console.log('set error done');

            }).catch(error => {
                console.log('inside error');
                setUser({
                    ...user,
                    loader: !user.loader,
                    error: error.message
                })

                // setLoader(prevLoader => !prevLoader)
                // console.log('catch loader done');

                // setData({})
                // console.log('catch  response done');

                // setError(error.message)
                // console.log('catch error  done');

            })
    }, [])
    console.log('render');
    return (
        <div>
            {/* {loader ? 'loading..' : JSON.stringify(data)}

            {loader ? 'loading..' : data.title}
            {error ? error : null} */}

            {user.loader ? 'loading..' : user.data.title}
            {user.error ? user.error : null}
            {/* <p>{JSON.stringify(data)}</p> */}

        </div>
    )
}

export default DataFetchingTwo
