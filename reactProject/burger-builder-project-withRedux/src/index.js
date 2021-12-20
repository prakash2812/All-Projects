import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import burgerBuilderReducer from './Store/reducers/burgerBuilder';
import orderReducer from './Store/reducers/order'
import ordersReducer from './Store/reducers/orders'

const rootReducer = combineReducers({
  burgerdata: burgerBuilderReducer,
  orderdata: orderReducer,
  ordersdata: ordersReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}><App /></Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
