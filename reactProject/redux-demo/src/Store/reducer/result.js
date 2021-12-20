import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './utility';


const initialState = {
    result: []
}

const deleteResult = (state, action) => {
    const newArrayresult = state.result.filter(result => result.id !== action.selectedId)
    return updateObject(state, { result: newArrayresult })
}

const reducer = (state = initialState, action) => {
    console.log(' result reducer input state value');
    console.log(state);
    switch (action.type) {

        case (actionTypes.SHOWED_RESULT):
            console.log('in side show result');
            console.log('Showed result state');
            console.log(state);
            return updateObject(state, { result: state.result.concat({ id: new Date(), value: action.result }) })
        /* return {
            ...state,
            // result: [...state.result, state.counter]
            // result: state.result.concat(state.counter)
            result: state.result.concat({ id: new Date(), value: action.result })
        } */

        case (actionTypes.DELETE_RESULT):
            // const newArrayresult = [...state.result];
            // newArrayresult.splice();
            console.log('Deleted  state');
            console.log(state);
            return deleteResult(state, action);
        /* const newArrayresult = state.result.filter(result => result.id !== action.selectedId)
        return updateObject(state, { result: newArrayresult }) */

        /* return {
            ...state,
            result: newArrayresult

        } */
    }
    console.log(" result reducer return state");
    console.log(state);
    return state;
}



export default reducer;