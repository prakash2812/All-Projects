import React, { useState, useMemo, useEffect } from 'react'

const MemoComplex = () => {
    const [count, setCount] = useState(() => 1)
    const [theme, setTheme] = useState(() => false)

    const changeTheme = () => {
        setTheme(prevTheme => !prevTheme)
    }
    const double = useMemo(() => {
        let i = 1
        while (i <= 2000000) i++
        return count * 2
    }, [count])

    const themeStyles = useMemo(() => ({
        backgroundColor: theme ? 'black' : 'white',
        color: theme ? 'white' : 'black'
    }), [theme])

    // useEffect dependency is a object, so after every render it gives new referential equality so it will render even it looks same(even no change in props or state)
    // to avoid that useMemo or callBack to stop re render cause its memorized the values or function so that it matched referential equality so it don't re render until its dependency changes
    useEffect(() => {
        console.log('theme changed')
    }, [themeStyles])


    return (
        <div>
            <input type='number' value={count} onChange={e => setCount(e.target.value)} />
            <button onClick={() => changeTheme()}>CHange theme</button>
            <div style={themeStyles} >{double()}</div>
        </div>
    )
}

export default MemoComplex
