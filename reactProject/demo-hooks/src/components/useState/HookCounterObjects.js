import React, { useState } from 'react'

function HookCounterObjects() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <form>
            <input type="text" name='firstName'
                value={name.firstName}
                onChange={(event) => setName({ firstName: event.target.value })}
            />
            <input type="text"
                name='lastName'
                value={name.lastName}
                onChange={(event) => setName({ lastName: event.target.value })}
            />
            <h2>Your FirstName: {name.firstName}</h2>
            <h2>Your LastName: {name.lastName}</h2>
            <h3>{JSON.stringify(name)}</h3>
            <h4>{name}</h4>
        </form>
    )
}

export default HookCounterObjects
