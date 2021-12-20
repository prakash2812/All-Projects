import React, { useState, useEffect } from 'react'

const arr = ['john', 'david', 'mike', 'like']

const Effect = () => {
    const [names, setNames] = useState([])
    let [count, setCount] = useState(0)

    useEffect(() => {
        console.log('in useEffect1')
        setNames(arr)
    }, []);

    useEffect(() => {
        console.log('in useEffect 2 ')
        setNames(names => {
            console.log('prevnames', names)
            return [...names, count]
        })
        /* setNames((prevState) => {
            console.log(prevState)
            return [...prevState, count]
        }) */
    }, [count])


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <ul>
                {names.map((name, index) => {
                    return <li key={index}> {name} </li>
                })}
            </ul>
        </div>
    )
}

export default Effect;