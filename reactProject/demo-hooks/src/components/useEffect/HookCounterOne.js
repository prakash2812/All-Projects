import React, { useState, useEffect } from 'react'

const HookCounterOne = () => {
    const [count, setCount] = useState(() => 0)
    const [name, setName] = useState(() => '')

    useEffect(() => {
        console.log('title updated');
        document.title = `${count} times clicked`
    }, [count])
    return (
        <div>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => setCount(prevCount => prevCount + 1)}
            >Click me
            </button>
            <h4>{count}</h4>
        </div>
    )
}

export default HookCounterOne
