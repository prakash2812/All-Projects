import React, { useState, } from 'react'

function Debounce() {

    const [id, setId] = useState(() => 0)
    const increment = () => {
        setId(prevId => prevId + 1)
    }

    const debounce = (fn, delay) => {
        let timeId;
        return function () {
            if (timeId) {
                clearTimeout(timeId)
            }
            timeId = setTimeout(() => fn(), delay)
        }
    }

    // throttling is not working cause re render happening due to state(fn called) and its recalling last=0 always
    const throttling = (fn, delay) => {
        let last = 0;
        return function () {
            const now = new Date().getTime()
            if ((now - last) < delay) {
                return
            }
            last = now
            return fn()
        }

    }


    return (
        <div>
            <p>{id}</p>
            <button onClick={debounce(increment, 2000)}>Debounce Increment</button>
            <button onClick={throttling(increment, 5000)}>Throttling Increment</button>
        </div>
    )
}

export default Debounce
