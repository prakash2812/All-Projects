const redux = require('redux');
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';



const initialIceCream = {
    noOfIceCreams: 20
}

const initialCake = {
    noOfCakes: 10
}

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: ' this is buy cake '
    }
}

const buyIcecream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'this is but ice cream'
    }
}


const iceCreamReducer = (state = initialIceCream, action) => {
    switch (action.type) {
        case 'BUY_ICECREAM':
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams - 1
            }
        default:
            return state;
    }

}

const cakeReducer = (state = initialCake, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1
            }
        default:
            return state;
    }
}

const rootReducer = redux.combineReducers({
    ice: iceCreamReducer,
    cake: cakeReducer
})

const store = redux.createStore(rootReducer, applyMiddleware(logger))
console.log('initial state :', store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyIcecream())
store.dispatch(buyCake())
unsubscribe()