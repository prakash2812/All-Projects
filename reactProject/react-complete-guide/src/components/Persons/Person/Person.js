import React, { Component } from "react";
import './Person.css';
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App'

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  };

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    return (
      <Aux>
        {/* {this.props.isauthenticate ? <p> i'm authenticated </p> : null} */}
        <AuthContext.Consumer>
          {auth => auth ? <p> i'm authenticated </p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I am {this.props.name} and i am {this.props.age}years old
        </p>
        <p> {this.props.children} </p>
        <input ref={this.inputElement} type="text" onChange={this.props.modified} value={this.props.name} />

      </Aux>
    );
    // return [
    //   <p onClick={this.props.click}> I am {this.props.name} and i am {this.props.age}years old </p>,
    //   <p> {this.props.children} </p>,
    //   <input type="text" onChange={this.props.modified} value={this.props.name} />
    // ]

  }
}
{/* <WithClass> */ }
{/* <div className='Person'> */ }

{/* </div> */ }
{/* </WithClass > */ }


Person.propTypes = {

  name: PropTypes.string,
  age: PropTypes.number
  // modified: PropTypes.func,
  // click: PropTypes.func
}
export default WithClass(Person, 'personclass');
