import React, { Component } from 'react'

class ClassTimer extends Component {
    interval;
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevTimer => ({ timer: prevTimer.timer + 1 }))
        }, 1000)
    }

    render() {
        return (
            <div>
                COunter - {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>stop timer</button>
            </div>
        )
    }
}

export default ClassTimer
