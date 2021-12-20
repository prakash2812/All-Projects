import React, { Component } from 'react'
import LifeCycle1 from './LifeCycle1';

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
        console.log('parent constructor');
    }

    getDerivedStateFormProps() {
        console.log('derived state props')
    }
    componentWillMount() {
        console.log('parent will mount called');
    }
    componentDidMount() {
        console.log('parent did mount called');
    }
    componentDidUpdate() {
        console.log('parent did update called');
    }
    componentWillUnmount() {
        console.log('parent will unmount called');
    }

    add() {
        this.setState((prevState) => {
            console.log(prevState)
            return {
                count: prevState.count + 1
            }
        })

        // this.setState({ count: this.state.count + 1 })
    }
    render() {
        console.log('parent rendering')
        return (
            <div>
                <button onClick={() => this.add()} >+</button>
                <p>{this.state.count}</p>
                <LifeCycle1 count={this.state.count} />
            </div>
        )
    }
}

export default LifeCycle;