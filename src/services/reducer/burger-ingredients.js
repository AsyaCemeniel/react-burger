import {
  GET_INGREDIENTS_FAILURE,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  REMOVE_CURRENT_INGREDIENT,
  SET_CURRENT_INGREDIENT,
} from "../actions";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailure: false,

  // constructorItems: [],
  currentIngredient: null,

  // order: null,
  // orderRequest: false,
  // orderFailure: false,
};

export default (state = initialState, action) => {
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
        ingredientsFailure: false,
      };
    case GET_INGREDIENTS_FAILURE:
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailure: true,
      };
    case SET_CURRENT_INGREDIENT:
      return {
        ...state,
        currentIngredient: payload,
      };
    case REMOVE_CURRENT_INGREDIENT:
      return {
        ...state,
        currentIngredient: null,
      };
    default:
      return state;
  }
};