import * as actions from '../action/actionTypes'
import { updateObject } from '../../Shared/utility'


const INGREDIENTS_PRICES = {
    salad: 0.5,
    bacon: 0.5,
    cheese: 1,
    meat: 2
}

const initalState = {
    ingredients: null,
    totalPrice: null,
    builder: false,
    // spinner: false,
    error: false
}

//  used utility function to concise the swich cases;
//  used param state and action and declared above as function and ...
// passed same in case as single line as return thae function name
const addIncrement = (state, action) => {
    return updateObject(state, {
        ingredients: {
            ...state.ingredients,
            [action.ingredientname]: state.ingredients[action.ingredientname] + 1

        },
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientname],
        builder: true,
    })
}

const removeIngredient = (state, action) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientname]: state.ingredients[action.ingredientname] - 1
        },
        totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientname],
        builder: true,

    }
}

const burgerBuilder = (state = initalState, action) => {
    switch (action.type) {
        case actions.ADDINGREDIENTS: return addIncrement(state, action)
        case actions.REMOVEINGREDIENTS: return removeIngredient(state, action)
        case actions.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,

                },
                totalPrice: action.ingredients.totalPrice,
                error: false,
                builder: false,


            }
        case actions.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: !state.error,
                builder: false,
            }

        default:
            return state;
    }

}

export default burgerBuilder;