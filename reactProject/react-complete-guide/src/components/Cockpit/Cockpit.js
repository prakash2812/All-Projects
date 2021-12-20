import React, { Component } from 'react';
import './Cockpit.css';
import Aux from '../../hoc/Aux'

class Cockpit extends Component {
    render() {
        let classes = [];
        let btnclass = 'switch';
        if (this.props.showPerson) {
            btnclass = ['textcolor', 'switch'].join(' ');
        }
        if (this.props.person.length <= 2) {
            classes.push('fontstyle');
        }
        if (this.props.person.length <= 1) {
            classes.push('textcolor');
        }
        return (
            <Aux>
                <h1>{this.props.apptitle}</h1>
                <p className={classes.join(' ')}>This is really working</p>
                <button className={btnclass} onClick={this.props.showusers}>Show Name</button>
                <button onClick={this.props.login}> Login </button>
            </Aux>
        );
        // return [
        //     <h1>{this.props.apptitle}</h1>,
        //     <p className={classes.join(' ')}>This is really working</p>,
        //     <button className={btnclass} onClick={this.props.showusers}>Show Name</button>
        // ]
    }
}

export default Cockpit;