import React, { useState, useEffect, useRef } from 'react'
// let interval;
const FunctionTimer = () => {
    const [timer, setTimer] = useState(() => ({ count: 0 }))
    const interval = useRef()
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus();
        interval.current = setInterval(() => {
            setTimer(prevTimer => ({ count: prevTimer.count + 1 }))
        }, 1000);
        return () => {
            console.log('inside cleaner');
            clearInterval(interval.current)
        }
    }, [])

    return (
        <div>
            counter: {timer.count}
            <input type="text" ref={inputRef} />
            <button onClick={() => clearInterval(interval.current)}>stop Timer</button>
        </div>
    )
}

export default FunctionTimer
