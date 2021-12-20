import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentC extends Component {
    render() {
        console.log('render component c');
        return (
            <div>
                <ComponentE />
            </div>
        )
    }
}

export default ComponentC
