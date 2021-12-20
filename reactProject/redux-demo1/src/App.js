import React from 'react';
import './App.css';
import CakeContainer from './components/cakeContainer';
import ReduxHooks from './components/reduxHooks';
import IceCreamContainer from './components/icecreamContainer'
import NewCakeContainer from './components/newCakeContainer'
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className='App'>
      {/* <IceCreamContainer /> */}
      {/* <ReduxHooks /> */}
      {/* <NewCakeContainer /> */}
      {/* <CakeContainer /> */}
      <UserContainer />
    </div>
  );
}

export default App;
