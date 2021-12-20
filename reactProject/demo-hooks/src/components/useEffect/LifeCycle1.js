import React, { Component } from 'react'
class LifeCycle1 extends Component {
    constructor(props) {
        super(props)
        // this.state = { count: this.props.count }
        console.log('child constructor');

    }
    componentWillMount() {
        console.log('child will mount called');
    }
    componentDidMount() {
        console.log('child did mount called');
    }
    componentDidUpdate() {
        console.log('child did update called');
    }
    componentWillUnmount() {
        console.log('child will unmount called');
    }
    render() {
        console.log('child rendering')
        return (
            <div>
                <p>child render {this.props.count}</p>
            </div>
        )
    }
}

export default LifeCycle1
