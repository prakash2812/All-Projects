import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';
import { STUDENTS } from './studentsList';
import { checkValidity } from './Components/Search';

const title = "Hacker Dormitory";


function App() {
  const [{ name, date, person }, setResident] = useState(() => ({ name: '', date: '', person: [] }))
  const [user, setUser] = useState(() => ({ name: '', date: false }))


  const inputHandler = (e) => {
    if (e.target.name === 'setName') {
      setResident(prevState => ({ ...prevState, name: e.target.value }))
    } else {
      setResident(prevState => ({ ...prevState, date: e.target.value }))
    }
  }

  const submitHandler = () => {
    let validityDate = STUDENTS.filter(item => item.name === name)
    if (validityDate.length > 0) {
      if (checkValidity(date, validityDate[0].validityDate)) {
        setResident(prevState => ({ ...prevState, person: [...prevState.person, name], name: '', date: '' }))
      } else {
        setUser(prevState => ({ ...prevState, name, date: true }))
      }
    } else {
      setUser(prevState => ({ ...prevState, name, date: false }))
    }
  }

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search data={STUDENTS} inputHandler={inputHandler} submitHandler={submitHandler} />
        {user.name ? <Error user={user} /> : null}
        <ResidentsList data={person} />
      </div>
    </div>
  );
}

export default App;
