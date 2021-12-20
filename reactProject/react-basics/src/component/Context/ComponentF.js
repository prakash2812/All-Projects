import React, { Component } from 'react'
import { UseConsumer } from './useContext'
class ComponentF extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         loader: false
    //     }
    // }
    loadHandler = () => {
        this.setState({ loader: true })
    }
    render() {
        console.log('render component f');

        return (
            <div>
                <UseConsumer>
                    {
                        (username) => {
                            return <div>Hello {username}</div>
                        }
                    }
                </UseConsumer>
                {/* <button className="" onClick={this.loadHandler}>click here</button> */}
            </div>
        )
    }
}

export default ComponentF
