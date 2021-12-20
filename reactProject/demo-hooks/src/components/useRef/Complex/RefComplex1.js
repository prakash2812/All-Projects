import React, { useState, useEffect, useRef } from 'react'

const RefComplex1 = () => {
    const [name, setName] = useState(() => '')

    //  useref doesn't re-render for mutable values changes just like state chages, we can avoid infinite loop
    /* const count = useRef(0)
    useEffect(() => {
        count.current = count.current + 1
    }) */

    //  useref used to store previous updated state value so it doesn't do rerender 
    /* const prevName = useRef()
    useEffect(() => {
        prevName.current = name
    }) */

    // useref used to create ref to Dom elements and interact directly
    const inputref = useRef()
    function focus() {
        inputref.current.focus()
    }
    return (

        <div>
            <input ref={inputref} value={name} onChange={(e) => setName(e.target.value)} />
            <p>my name is {name}</p>
            <button onClick={focus} >Focus</button>
            {/* <p> i render {count.current} times</p> */}
            {/* <p> i render {prevName.current} times</p> */}

        </div>
    )
}

export default RefComplex1
//  use ref doesn't re- render for mutable values changes just like state chages, we can avoid infinite loop
//  useref used to store previous updated state value