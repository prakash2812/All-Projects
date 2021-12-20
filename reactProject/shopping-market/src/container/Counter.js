import React, { Component } from 'react'

class Counter extends Component {

    state = {
        count: 0
    }

    increment = () => {
        this.setState(prev => ({ count: prev.count + 1 }))
    }
    decrement = () => {
        this.setState((prev) => ({
            count: prev.count - 1
        }))
    }
    render() {
        return (
            <>
                <h1> value:{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button> <br></br>
                <button onClick={this.decrement}>Decrement</button>
            </>
        )
    }
}

export default Counter;