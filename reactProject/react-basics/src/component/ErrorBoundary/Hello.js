import React from 'react'

function Hello({ name }) {
    if (name === 'joker') {
        throw new Error('not a hero , this is joker')
    }
    return (
        <div>
            <h2>hello {name}</h2>
        </div>
    )
}

export default Hello
