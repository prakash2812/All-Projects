import React, { useState, useEffect } from 'react'

const ChildList = ({ getItems }) => {
    const [items, setItem] = useState([]);
    // useEffect dependency is a function, so after every render it gives new referential equality so it will render even it looks same(even no change in props or state)
    // to avoid that useMemo or useCallback to stop re render cause its memorized the values or function so that it matched referential equality so it don't re render until its dependency changes
    useEffect(() => {
        setItem(getItems())
        console.log('child rendering')
    }, [getItems])

    return (
        items.map((item, index) => {
            return <div key={index}>{item}</div>
        })
    )
}

export default memo(ChildList)
