import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParent extends Component {
    constructor(props) {
        super(props)
        this.inputFocus = React.createRef()
    }

    clickHandler = () => {
        this.inputFocus.current.focus()
    }
    render() {
        return (
            <div>
                <FRInput ref={this.inputFocus} />
                <button onClick={this.clickHandler} >Focus input</button>
            </div>
        )
    }
}

export default FRParent
