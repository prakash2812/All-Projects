import React, { Component } from 'react'

export class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }
    incrementCounter = () => {
        this.setState(prevCounter => {
            return { counter: prevCounter.counter + 1 }
        })
    }
    render() {

        return (
            <div>
                {this.props.children(this.state.counter, this.incrementCounter)}
            </div>
        )
    }
}

export default User
