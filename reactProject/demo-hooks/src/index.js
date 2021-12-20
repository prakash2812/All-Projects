import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContext from './AppContext';
import * as serviceWorker from './serviceWorker';
import AppReducer from './AppReducer';

ReactDOM.render(
  // <React.StrictMode>
  // <AppContext />,
  // <AppReducer />,
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
