import React, { useState, useEffect, Component } from 'react'
import { Counter } from './Counter'



/* const LifeCycle = () => {
    const [show, setShow] = useState(() => false)
    useEffect(() => {
        console.log('component did mount')
        return () => {
            console.log('component un mount')
        }
    }, [])
    const showHandler = () => {
        setShow(prevState => !prevState)
    }
    return (
        <div>
            <h1> Our App </h1>
            <button onClick={showHandler}>
                {show ? 'Hide Counter' : 'Show Counter'}
            </button>
            {show && <Counter />}
        </div>
    )
} */


class LifeCycle extends Component {
    state = { show: false }
    showHandler = () => {
        this.setState(prevState => {
            console.log('PREVSTATE', prevState)//{ show: false }
            return { show: !prevState.show }
        })
    }

    static getDerivedStateFromProps() {
        console.log('parent derived state from props')
    }

    UNSAFE_componentWillMount() {
        console.log('parent component will mount')
    }

    componentDidMount() {
        console.log('parent component did mount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('parent should component update')
        console.log('NEXT PROPS', nextProps)//{}
        console.log('NEXT STATE', nextState) //{ show: true }
        return true
    }

    componentDidUpdate(prevProps, prevState, snap) {
        console.log('parent component did update')
        console.log("prevprops", prevProps) // {}
        console.log('prevstate', prevState) // { show: false }
        console.log('snap', snap) // { show: false }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('parent snap taken')
        return 'something we taken the screen shot'
    }

    componentWillUnmount() {
        console.log('parent component unmount')
    }


    render() {
        console.log(' parent rendering------')
        return (
            <div>
                <h1> Our App </h1>
                <button onClick={this.showHandler}>
                    {this.state.show ? 'Hide Counter' : 'Show Counter'}
                </button>
                {this.state.show && <Counter />}
            </div>
        )
    }
}


export default LifeCycle;