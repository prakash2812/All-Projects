import React, { Component } from 'react'
import HOC from './HOC'

class HoverCounter extends Component {

    render() {
        const { counter, incrementHandler } = this.props
        return (
            <div>
                <button onMouseOver={incrementHandler}>{this.props.name} Hover {counter} times</button>
            </div>
        )
    }
}

export default HOC(HoverCounter, 10)
