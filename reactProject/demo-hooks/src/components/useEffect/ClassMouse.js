import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0

        }
    }
    logMousePosition = event => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    };

    componentDidMount() {
        console.log('Event called');
        document.addEventListener("mouse move", this.logMousePosition)

    }

    render() {
        return (
            <div>
                X-{this.state.x} Y-{this.state.y}
            </div>
        )
    }
}

export default ClassMouse;

// Using hook with dependency 
/* export default function Testing() {
    const [{ x, y }, setState] = useState(() => ({ x: 0, y: 0 }))

    const tick = (e) => {
        console.log('tick called')
        setState(state => ({ x: e.clientX, y: e.clientY }))
    }

    useEffect(() => {
        console.log('start event')
        window.addEventListener('mousemove', tick)
        return () => {
            console.log('close event')
            window.removeEventListener('mousemove', tick)
        }
    }, [x, y])


    return (
        <div>
            X:{x}
                Y:{y}
        </div>
    )

}
 */