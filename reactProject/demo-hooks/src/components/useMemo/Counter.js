import React, { useState, useMemo } from 'react'

const Counter = () => {
    const [counter1, setCounter1] = useState(() => 0)
    const [counter2, setCounter2] = useState(() => 0)

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) {
            i++
        }
        return counter1 % 2 === 0
    }, [counter1])
    return (
        <div>
            <button onClick={() => setCounter1(prevCount => prevCount + 1)}>Counter one {counter1}</button>
            <span>{isEven ? 'even' : 'Odd'}</span>
            <br />
            <button onClick={() => setCounter2(prevCount => prevCount + 1)}>Counter two {counter2}</button>
        </div>
    )
}

export default Counter
