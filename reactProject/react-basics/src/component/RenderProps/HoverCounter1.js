import React, { Component } from 'react'

class HoverCounter1 extends Component {

    render() {
        const { counter, incrementCounter } = this.props;
        return (
            <div>
                <button
                    onMouseOver={incrementCounter}>Hover {counter} times
                </button>
            </div>
        )
    }
}

export default HoverCounter1
