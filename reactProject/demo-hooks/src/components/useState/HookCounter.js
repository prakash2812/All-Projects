import React, { useState } from 'react'
const HookCounter = () => {
    const initialCount = 0;
    const [count, setCount] = useState(() => {
        console.log('initial');
        return initialCount
    })
    const [count1, setCount1] = useState(() => {
        console.log('initial2');
        return initialCount
    })
    const incrementFive = () => {
        console.log('events call');
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    console.log('render call');
    return (
        <div>
            Count:{count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Add five</button>
        </div>
    )
}
export default HookCounter;