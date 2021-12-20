import React, { useState, useEffect } from 'react'

const IntervalHookCounter = () => {
    const initialCount = 0
    const [count, setCount] = useState(() => initialCount)
    const [display, setDisplay] = useState(() => false)
    const [interval, setInter] = useState(() => '')

    // const tick = () => {
    //     setCount(prevCount => prevCount + 1)
    // }

    // useEffect(() => {
    //     const interval = setInterval(tick, 2000)

    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])
    // var interval = null
    const startInterval = () => {
        setDisplay(!display);
        setInter(() => setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000));
    }
    const closeInterval = () => {
        console.log('interval :', interval);
        clearInterval(interval)
        setDisplay(!display)
    }
    const refresh = () => {
        setCount(initialCount)
    }
    return (
        <div>
            <button disabled={display}
                onClick={startInterval}>Start
            </button>
            {count}
            <button disabled={!display}
                onClick={closeInterval}>Stop
            </button>
            <button onClick={refresh}>Refresh</button>
        </div>
    )
}

export default IntervalHookCounter
