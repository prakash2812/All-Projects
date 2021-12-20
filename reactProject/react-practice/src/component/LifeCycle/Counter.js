import React, { Component, useState } from 'react'



export class Counter extends Component {

    state = { count: 0 }


    componentWillReceiveProps(nextProps) {
        console.log('CHILD WILL RECEIVE PROPS')
    }

    static getDerivedStateFromProps(props) {
        console.log("child get Derived state from props ")

    }
    componentWillMount() {
        console.log('child will mount')
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('child component will update')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('child did update')
    }
    componentDidMount() {
        console.log("CHILD DID MOUNT")
    }

    increment = () => {
        this.setState((prevCount) => ({ count: prevCount.count + 1 }))
    }
    render() {
        console.log('chile rendering -----')
        return (
            <div>
                <div>
                    <h3>Counter {this.state.count}</h3>
                    <button onClick={this.increment}>Increment</button>
                </div>
            </div>
        )
    }
}


/* export const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }
    return (
        <div>
            <h3>Counter {count}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
 */