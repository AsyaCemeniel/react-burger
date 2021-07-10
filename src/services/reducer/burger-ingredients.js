import {
  GET_INGREDIENTS_FAILURE,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  isIngredientsLoaded: false,
  ingredientsFailure: false,
};

const BurgerIngredients = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        ingredientsRequest: true,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: payload,
        ingredientsRequest: false,
        isIngredientsLoaded: true,
        ingredientsFailure: false,
      };
    case GET_INGREDIENTS_FAILURE:
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailure: true,
      };
    default:
      return state;
  }
};

export default BurgerIngredients;
