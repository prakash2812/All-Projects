import React, { useState } from 'react'

const AddToCart2 = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                console.log('inside submit');
                setName("")
                setAge("")
            }}>
                <label >Material</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label >Age</label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddToCart2
