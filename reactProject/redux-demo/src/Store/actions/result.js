import * as actionTypes from './actionTypes'

export const saveResult = (resl) => {
    return {
        type: actionTypes.SHOWED_RESULT,
        result: resl
    }
}

export const showResult = (res1) => {
    return (dispatch, getState) => {
        const oldCount = getState().ctr.counter;
        console.log(oldCount);
        setTimeout(() => {
            dispatch(saveResult(res1))
        }, 2000)
    }
}
export const deleteResult = (selId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        selectedId: selId
    }
}