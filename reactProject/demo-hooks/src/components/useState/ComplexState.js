import React, { useState } from 'react'

function sumValues() {
    return 0
}

function ComplexState() {
    // const [count, setCount] = useState(() => sumValues()) // it runs only once first render user ()=>
    // const [count, setCount] = useState(0)// it triggers for every render
    const [{ count, count2 }, setCount] = useState({ count: 0, count2: 0 })
    // const [{ secondcount, secondcount2 }, setIncrement] = useState({ secondcount: 0, secondcount2: 0 })

    return (
        // <div>
        //     <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        //     <p>{count}</p>
        //     <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        // </div>
        // currState is current value i.e, entire object {count,count2}
        <div>
            <button onClick={() => {
                setCount(currState => ({
                    ...currState,
                    count: currState.count + 1,
                    count2: currState.count2 + 1
                }));
                // setIncrement(currState => ({
                //     secondcount: currState.secondcount + 1,
                //     secondcount2: currState.secondcount2 + 1
                // }))
            }}
            >+
            </button>
            <p>firstcount:{count}</p>
            <p>secondCount:{count2}</p>

            {/* <p>firstcount:{secondcount}</p>
            <p>secondCount:{secondcount2}</p> */}
        </div>
    )
}

export default ComplexState
