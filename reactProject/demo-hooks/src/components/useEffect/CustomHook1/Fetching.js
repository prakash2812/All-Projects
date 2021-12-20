import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'

const Fetching = () => {
    // const [id, setId] = useState(() => JSON.parse(localStorage.getItem('id')))
    const [id, setId] = useState(0)

    const { data, loading } = useFetch(`http://numbersapi.com/${id}/trivia`)

    // useEffect(() => {
    //     localStorage.setItem('id', JSON.stringify(id))
    // }, [id])

    return (
        <div>
            {!data ? 'loading...' : data}
            <p>ID: {id}</p>
            <button onClick={() => setId(prevId => prevId + 1)}> increment</button>

        </div>
    )
}

export default Fetching
