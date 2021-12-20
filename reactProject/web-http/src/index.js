import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker';
import DemoApp1 from './DemoApp1';
ReactDOM.render(
    // <React.StrictMode>
    // <App />,
    <DemoApp1 />,
    // </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister()

