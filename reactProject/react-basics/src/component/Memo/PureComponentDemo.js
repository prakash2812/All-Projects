import React, { PureComponent } from 'react'
import MemoDemo from './MemoDemo'

export class PureComponentDemo extends PureComponent {
    state = { count: 0 }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count,
                age: this.state.count + 1,
                name: 'arjun'
            })
        }, 2000)
    }

    render() {
        console.log('parent component')
        return (
            <div>
                {this.state.count}
                <MemoDemo count={this.state.count} age={this.state.age} />
            </div>
        )
    }
}


export default PureComponentDemo
