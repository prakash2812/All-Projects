import React, { useState, useMemo } from 'react'

const Table = () => {
    const [input, setInput] = useState(() => 0)
    const [input1, setInput1] = useState(() => 0)

    const [chickenInput, setChickenInput] = useState(() => 0)
    const [mottonInput, setMottonInput] = useState(() => 0)


    const showResult = useMemo(() => input * 20, [input])
    const showResult1 = useMemo(() => input1 * 30, [input1])

    const chickenResult = useMemo(() => chickenInput * 100, [chickenInput])
    const mottonResult = useMemo(() => mottonInput * 200, [mottonInput])


    return (
        <div>
            <h2 style={{ align: 'center', color: 'blue' }}> Veg Market :</h2>
            <label for='Tomato'>
                <button onClick={() => setInput(prevInput => prevInput + 1)}>+</button>
                 Tomato <button onClick={() => setInput(prevInput => prevInput - 1)}>-</button> : </label>
            <input type="text" value={input} disabled={false} onChange={(e) => { setInput(e.target.value) }} />
            *20/kg
            <input type="text" value={showResult} disabled /> <br /> <br />

            <label for='Cabage'>
                <button onClick={() => setInput1(prevInput1 => prevInput1 + 1)}>+</button> Cabbage
                <button onClick={() => setInput1(prevInput1 => prevInput1 - 1)}>-</button> :
            </label>
            <input type="text" value={input1} disabled onChange={(e) => { setInput1(e.target.value) }} />
            *30/kg
            <input disabled type="text" value={showResult1} />
            <br /> <br />

            <h2 style={{ align: 'center', color: 'brown' }}> Non Veg Market :</h2>
            <label for='Chicken'>
                <button onClick={() => setChickenInput(prevChicInput => prevChicInput + 1)}>+</button> Chicken
                <button onClick={() => setChickenInput(prevChicInput => prevChicInput - 1)}>-</button> :
            </label>
            <input type="text" value={chickenInput} disabled onChange={(e) => { setChickenInput(e.target.value) }} />
            *100/kg
            <input disabled type="text" value={chickenResult} />
            <br /> <br />

            <label for='Motton'>
                <button onClick={() => setMottonInput(prevMotInput => prevMotInput + 1)}>+</button> Motton
                <button onClick={() => setMottonInput(prevMotInput => prevMotInput - 1)}>-</button> :
            </label>
            <input type="text" value={mottonInput} disabled onChange={(e) => { setMottonInput(e.target.value) }} />
            *200/kg
            <input disabled type="text" value={mottonResult} />
            <br /> <br />


            <h2 style={{ align: 'center', color: "green" }}> Your shopping bill Amount  :</h2>
            <span>sum of veg market: {showResult + showResult1} <br /></span>
            <span>sum of non veg market: {chickenResult + mottonResult}</span>
            <br /><br />
            Total billable amount is : {showResult + showResult1 + chickenResult + mottonResult}

        </div>
    )
}

export default Table
