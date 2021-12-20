import React, { useState } from 'react'

function HookCounterArray() {
    const [items, setItems] = useState([]);
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10)
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add an Item</button>
            <ul>
                {items.map((item => <li key={item.id}>{item.value}</li>))}
            </ul>
            <h4>{JSON.stringify(items)}</h4>
        </div>

    )
}

export default HookCounterArray

