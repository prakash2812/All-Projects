import React, { useState, useEffect } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(() => 0)
    const [y, setY] = useState(() => 0)

    const logMouseEvent = (e) => {
        console.log('set data');
        setX(e.clientX);
        setY(e.clientY)
    }
    // First param is a function and inside that return a function is for ummount
    // to useEfeect clear
    useEffect(() => {
        console.log('effect');
        window.addEventListener('mousemove', logMouseEvent)

        return () => {
            console.log('Unmounting event after unmounted of component');
            window.removeEventListener('mousemove', logMouseEvent)
        }
    }, [])
    return (
        <div>
            X-{x} Y-{y}
        </div>
    )
}

export default HookMouse
