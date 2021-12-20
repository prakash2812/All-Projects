import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
    }
    componentDidMount() {
        // console.log(this.inputRef);
        this.inputRef.current.focus()
    }
    // handler = () => {
    //     this.inputRef.current.focus()
    // }
    render() {

        return (
            <div>
                <input type="text" ref={this.inputRef} />
                {/* <button onClick={this.handler} >Focus here</button> */}
            </div>
        )
    }
}

export default RefDemo
