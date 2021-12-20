import React, { useState, useEffect } from 'react'
import Testing1 from './Testing1';

function initialState() {
    console.log("initialstate");
    return 0
}
const Testing = () => {
    const [count, setCount] = useState(0)
    console.log('after set count')
    const [count1, setCount1] = useState(1)
    console.log('after set count1')
    useEffect(() => {
        console.log('inside effect');
    }, [count])
    const incrementHandler = () => {
        console.log('inside handler');
        setCount(prevCount => prevCount + 1)
        setCount1('')
        console.log('2nd inside hadler');
    }
    console.log('----------render return--------------');
    return (
        <div>
            <Testing1 handler={incrementHandler} />
            <button onClick={incrementHandler}>press me {count}</button>
            <button onClick={() => setCount1(prevCount => prevCount + 1)}>press me {count1}</button>
        </div>
    )
}

export default Testing
