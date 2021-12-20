export const updateObject = (oldObject, UpdateState) => {
    return {
        ...oldObject,
        ...UpdateState
    }
}