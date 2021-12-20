import React, { PureComponent } from 'react';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'

// import ErrorComponent from '../components/ErrorComponent/ErrorComponent'
import './App.css'

export const AuthContext = React.createContext();

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        { id: '1', name: 'arjun', age: 28 },
        { id: '2', name: 'arjunPrakash', age: 8 },
        { id: '3', name: 'arjunPalvoy', age: 2 }
      ],
      showPerson: false,
      showClicked: 0,
      authenticated: false
    }
  }

  // state = {
  //   person: [
  //     { id: '1', name: "Arjun", age: 28 },
  //     { id: '2', name: 'prakash', age: 28 },
  //     { id: '3', name: "Aryan", age: 28 }
  //   ],
  //   showPerson: false
  // }

  switchNameHandler = (personname) => {
    this.setState(
      {
        person: [
          { name: personname, age: 8 },
          { name: 'david', age: 2 },
          { name: "John", age: 1 }
        ]
      }
    )
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id
    })
    const persons = { ...this.state.person[personIndex] };
    persons.name = event.target.value;

    const person = [...this.state.person]
    person[personIndex] = persons;
    this.setState(
      {
        person: person
      }
    )
  }

  deletePersonHandler = (index) => {
    // let persons=this.state.person.slice();
    let persons = [...this.state.person]
    persons.splice(index, 1)
    this.setState({
      person: persons
    })
  }

  togglePersonHandler = () => {
    const dontshow = this.state.showPerson;
    this.setState((prevState, props) => {
      return {
        showPerson: !dontshow,
        showClicked: prevState.showClicked + 1
        // showClicked: this.state.showClicked + 1
      }
    })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {

    let personui = null;

    if (this.state.showPerson) {
      personui =
        <Persons data={this.state.person}
          clicked={this.deletePersonHandler}
          updated={this.nameChangeHandler}
          authenticate={this.state.authenticated} />
      {/* {
            this.state.person.map((person, index) => {
              return
                <Person click={() => this.deletePersonHandler(index)} modified={(event) => this.nameChangeHandler(event, person.id)} name={person.name} age={person.age} key={person.id} />

            })
          } */}
      {/* <Person click={this.switchNameHandler.bind(this, 'preethi')} name={this.state.person[0].name} age={this.state.person[0].age} />
            <Person modified={this.nameChangeHandler} name={this.state.person[1].name} age={this.state.person[1].age} >My Hobbies:swiming</Person>
            <Person modified={this.nameChangeHandler} name={this.state.person[2].name} age={this.state.person[2].age} /> */}
    }

    return (
      <div className='App'>
        <Cockpit
          apptitle={this.props.title}
          showPerson={this.state.showPerson}
          person={this.state.person}
          showusers={this.togglePersonHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {personui}
        </AuthContext.Provider>

        <h2>Hi i'm Devloper developing react application</h2>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Arjun welcome to React js'));
  }
}



// var app = (
//   <div>
//     <App name='arjun' age="28" />
//     <App name="hero" age='18' />
//   </div>
// );

export default App;
