import React, { Component } from 'react';


const Hoc = (HocComponent, data) => {
    return class extends Component {
        state = {
            data: data
        }
        render() {
            return (
                <HocComponent data={this.state.data} {...this.props} >

                </HocComponent>
            )
        }
    }
}

export default Hoc;