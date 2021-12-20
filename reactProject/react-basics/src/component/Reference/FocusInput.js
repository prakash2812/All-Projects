import React, { Component } from 'react'
import Input from './Input'
class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.mainRef = React.createRef()
    }

    Handler() {
        this.mainRef.current.focusUpdate()
    }

    render() {
        return (
            <div>
                <Input ref={this.mainRef} />
                <button onClick={() => this.Handler()}>focus button</button>
            </div>
        )
    }
}

export default FocusInput
