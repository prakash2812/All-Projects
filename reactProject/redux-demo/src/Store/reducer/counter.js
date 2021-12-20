import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './utility';


const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    console.log(' counter reducer input state value');
    console.log(state);
    switch (action.type) {
        case (actionTypes.INCREMENT):
            console.log('increment state');
            console.log(state);
            return updateObject(state, { counter: state.counter + 1 })
        /* return {
            ...state,
            counter: state.counter + 1
        } */
        case (actionTypes.DECREMENT):
            console.log('Decrement state');
            console.log(state);
            return updateObject(state, { counter: state.counter - 1 })
        /* return {
            ...state,
            counter: state.counter - 1
        } */
        case (actionTypes.ADD):
            console.log('ADD state');
            console.log(state);
            return updateObject(state, { counter: state.counter + action.value })
        /* return {
            ...state,
            counter: state.counter + action.value
        } */
        case (actionTypes.SUB):
            console.log('SUB state');
            console.log(state);
            return updateObject(state, { counter: state.counter - action.value })
        /* return {
            ...state,
            counter: state.counter - action.value
        } */
    }
    console.log(" counter reducer return state");
    console.log(state);
    return state;
}



export default reducer;