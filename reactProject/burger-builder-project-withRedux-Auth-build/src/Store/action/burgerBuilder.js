import * as actionTypes from './actionTypes'
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADDINGREDIENTS,
        ingredientname: name
    }
}
export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVEINGREDIENTS,
        ingredientname: name
    }
}

const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

const fetchDataError = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    // console.log('init ingredients--------');
    return dispatch => {
        axios.get('/Ingredients.json')
            .then(response => {
                // console.log('init ingredients response--------');
                dispatch(setIngredients(response.data))
            })
            .catch(error => {
                // console.log('init ingredients error--------');
                dispatch(fetchDataError())
            })
    }
}