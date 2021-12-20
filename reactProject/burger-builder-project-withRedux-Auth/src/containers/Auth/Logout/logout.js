import React, { Component } from 'react'
import * as authActions from '../../../Store/action/index'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export class Logout extends Component {
    componentDidMount() {
        this.props.onLogout()
    }
    render() {
        return (
            <Redirect to='/' />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authActions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)
