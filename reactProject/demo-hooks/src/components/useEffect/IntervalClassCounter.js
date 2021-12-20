import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    tick = () => {
        console.log('trcl called');
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        console.log('Didmount called');
        this.interval = setInterval(this.tick, 2000)
    }

    componentWillUnmount() {
        console.log('unmount called');
        clearInterval(this.interval)
    }

    render() {
        console.log('render called');
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}

export default IntervalClassCounter
