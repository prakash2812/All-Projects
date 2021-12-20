
export const updateObject = (oldObject, updateValue) => {
    return {
        ...oldObject,
        ...updateValue
        // ...state
        //  counter: state.counter - 1
    }
}