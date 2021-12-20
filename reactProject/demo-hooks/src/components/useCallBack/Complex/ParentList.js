import React, { useState, useCallback } from 'react'

import ChildList from './ChildList'

const ParentList = () => {
    const [number, setNumber] = useState(() => 0)
    const [theme, setTheme] = useState(() => false)
    const toggleStyle = {
        backgroundColor: theme ? '#333' : '#FFF',
        color: theme ? '#FFF' : '#333'
    }

    const getItem = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    return (
        <>
            <div style={toggleStyle}>
                <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            </div>
            <button role='button' onClick={() => setTheme(prevTheme => !prevTheme)}>Toggle Button</button>
            <ChildList getItems={getItem} />
        </>
    )
}

export default ParentList
