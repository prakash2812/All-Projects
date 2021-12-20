import * as actionTypes from '../actions/actionTypes'


const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    console.log(' input state value');
    console.log(state);
    switch (action.type) {
        case (actionTypes.INCREMENT):
            console.log('increment state');
            console.log(state);
            return {
                ...state,
                counter: state.counter + 1
            }
        case (actionTypes.DECREMENT):
            console.log('Decrement state');
            console.log(state);
            return {
                ...state,
                counter: state.counter - 1
            }
        case (actionTypes.ADD):
            console.log('ADD state');
            console.log(state);
            return {
                ...state,
                counter: state.counter + action.value
            }
        case (actionTypes.SUB):
            console.log('SUB state');
            console.log(state);
            return {
                ...state,
                counter: state.counter - action.value
            }
        case (actionTypes.SHOWED_RESULT):
            console.log('in side show result');
            console.log('Showed result state');
            console.log(state);
            return {
                ...state,
                // result: [...state.result, state.counter]
                // result: state.result.concat(state.counter)
                result: state.result.concat({ id: new Date(), value: state.counter })
            }
        case (actionTypes.DELETE_RESULT):
            // const newArrayresult = [...state.result];
            // newArrayresult.splice();
            console.log('Deleted  state');
            console.log(state);
            const newArrayresult = state.result.filter(result => result.id !== action.selectedId)
            return {
                ...state,
                result: newArrayresult

            }
    }
    console.log(" reducer return state");
    console.log(state);
    return state;
}



// export default reducer;