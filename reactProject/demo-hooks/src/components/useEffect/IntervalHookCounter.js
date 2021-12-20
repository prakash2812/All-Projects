import React, { useState, useEffect } from 'react'

const IntervalHookCounter = () => {
    const initialCount = 0
    const [count, setCount] = useState(() => initialCount)
    const [display, setDisplay] = useState(() => false)
    const [interval, setInter] = useState(() => '')



    useEffect(() => {
        console.log('effect called')
        const interval = setInterval(tick, 1000)

        return () => {
            console.log('clear interval')
            clearInterval(interval)
        }
    }, [])
    const tick = () => {
        console.log('tick called')
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
