import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = ` ${this.state.count} times clicked`
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('updating doc title')
        if (prevState.count !== this.state.count) {
            console.log('updated doc title');
            document.title = ` ${this.state.count} times clicked`
        }
    }

    render() {
        console.log('rendering')
        return (
            <div>
                <input type='text' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click Here</button>
                <h4>{this.state.count}</h4>
            </div>
        )
    }
}

export default ClassCounterOne
