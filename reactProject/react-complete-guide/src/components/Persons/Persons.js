import React, { PureComponent } from 'react';
import Person from './Person/Person';
import './Person/Person.css';
import PropTypes from 'prop-types';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        this.lastElement = React.createRef();
    }

    componentDidMount() {
        this.lastElement.current.focus();
    }
    render() {
        Persons.propTypes = {
            clicked: PropTypes.func,
            updated: PropTypes.func
        }
        return (this.props.data.map((person, index) => {
            return <Person
                position={index}
                ref={this.lastElement}
                click={() => this.props.clicked(index)}
                modified={(event) => this.props.updated(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
            // isauthenticate={this.props.authenticate}
            />
        }));
    }
}

// Person.propTypes = {
//     clicked: PropTypes.func,
//     updated: PropTypes.func
// }



export default Persons;