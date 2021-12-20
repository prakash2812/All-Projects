import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cakeReducer from '../cake/cakeReducer';
import iceCreamreducer from '../icecream/icecreamReducer'
import { userReducer } from '../user/userReducer';

// const store = createStore(cakeReducer)
const rootstore = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamreducer,
    user: userReducer
})

const store = createStore(rootstore, composeWithDevTools(applyMiddleware(logger, thunk)))
export default store;