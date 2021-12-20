import React, { useState, } from 'react'

const HOC = (Component) => {
    const NewComponent = (props) => {
        const [count, setCount] = useState(() => 0)
        const increment = () => {
            setCount(prevState => prevState + 1)
        }
        // console.log(this.props.name)
        return (
            <Component count={count} increment={increment} {...props}>

            </Component>
        )
    }
    return NewComponent
}

export default HOC