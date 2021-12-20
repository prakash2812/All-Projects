import React from 'react'

const Hello = () => {
    React.useEffect(() => {
        console.log('hello effect');
        return () => {
            console.log('hello cleanup');
        }
    }, [])
    return (
        <div>
            Hello
        </div>
    )
}

export default Hello
