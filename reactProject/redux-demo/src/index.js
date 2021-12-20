import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from './Store/reducer/counter';
import resultReducer from './Store/reducer/result';

import './index.css'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './Store/reducer/reducer';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

registerServiceWorker();
