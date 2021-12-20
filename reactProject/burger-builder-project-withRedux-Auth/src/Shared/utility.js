// --------- swuich case update project -----------------------------------------------
export const updateObject = (oldObject, UpdateState) => {
    return {
        ...oldObject,
        ...UpdateState
    }
}

// -- check validity for login and fill form -------------------------------------
//checking input values validity should not be empty and space
export const checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
        // console.log('required' + isValid);
    }
    if (rules.minLength) {
        isValid = value.trim().length >= rules.minLength && isValid;
        // console.log('minLength' + isValid);
    }
    if (rules.maxLength) {
        isValid = value.trim().length <= rules.maxLength && isValid;
        // console.log('maxLength' + isValid);
    }
    return isValid;
}
