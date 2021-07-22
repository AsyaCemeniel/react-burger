import { IngredientType } from "../../types";
import {
  GetIngredientsActions,
  GET_INGREDIENTS_FAILURE,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions";

type IngredientsState = {
  ingredients: IngredientType[];
  ingredientsRequest: boolean;
  isIngredientsLoaded: boolean;
  ingredientsFailure: boolean;
};

const initialState: IngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  isIngredientsLoaded: false,
  ingredientsFailure: false,
};

const BurgerIngredients = (
  state = initialState,
  action: GetIngredientsActions
): IngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        ingredientsRequest: true,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
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
