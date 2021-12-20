import React, { useState, useEffect } from 'react'

const Testing1 = ({ handler }) => {
    console.log('Child initial');
    const [num, setNum] = useState(() => 0)
    console.log('after child usestate');
    useEffect(() => {
        console.log('inside child  effect');
    }, [num])
    const newHandler = () => {
        console.log('child handler');
        setNum(prevnum => prevnum - 1)
    }
    console.log('------child render-------');
    return (
        <div>
            <button onClick={handler}>Child-parent button1</button>
            <button onClick={newHandler}>Child decrement</button>

        </div>
    )
}

export default Testing1
