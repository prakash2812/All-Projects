import { BUY_CAKE } from './cakeTypes';

const initialState = {
    noOfCakes: 10,
    counter: 1
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes - action.payload
            }
        default:
            return state;
    }
}

export default cakeReducer;