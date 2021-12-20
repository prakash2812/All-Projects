import React, { Component } from 'react'

const HOC = (WrappedComponent, number) => {
    return class extends Component {
        constructor(props) {
            super(props)

            this.state = {
                counter: 0
            }
        }
        incrementHandler = () => {
            this.setState(prevCounter => {
                return { counter: prevCounter.counter + number }
            }
            )
        }
        render() {
            return (
                <WrappedComponent counter={this.state.counter} incrementHandler={this.incrementHandler} {...this.props} />
            )
        }
    }
}

export default HOC;