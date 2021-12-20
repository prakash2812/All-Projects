import React, { Component } from 'react'

// for events and clicks we have to use try catch
class ErrorBoundary extends Component {
    state = { show: false }
    static getDerivedStateFromError(error) {
        return {
            show: true
        }
    }
    componentDidCatch(error, info) {
        console.log('error', error.message)
        console.log('info is', info)
    }
    render() {
        if (this.state.show) {
            return <h2>Something went wrong !! </h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary
