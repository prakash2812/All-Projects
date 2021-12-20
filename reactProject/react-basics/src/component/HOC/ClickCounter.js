import React, { Component } from 'react'
import HOC from './HOC'

class ClickCounter extends Component {

    render() {
        const { counter, incrementHandler } = this.props
        return (
            <div>
                <button
                    onClick={incrementHandler}>{this.props.name} clik {counter} times
                </button>
            </div>
        )
    }
}

export default HOC(ClickCounter, 5)
