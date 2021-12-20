import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UseContext, { UseConsumer } from './useContext'

class ComponentE extends Component {
    static contextType = UseContext
    render() {
        console.log('render component e');

        return (
            <div>
                Component E Context {this.context}
                <ComponentF />

            </div>
        )
    }
}
// ComponentE.contextType = UseContext

export default ComponentE
