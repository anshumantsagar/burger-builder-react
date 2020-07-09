import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 30,
    error: false
}


const INGREDIENTS_PRICES = {
    salad: 10.50,
    cheese: 10,
    meat: 20,
    bacon: 15,
}

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1}
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1}
            const updatedIngs = updateObject(state.ingredients, updatedIng);
            const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 30,
        error: false
    });
}

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true});
}

const reducer = (state = initialState, action) => {
     switch (action.type) {
        case actionTypes.ADD_INGREDIENTS: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENTS: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
     }
};

export default reducer;