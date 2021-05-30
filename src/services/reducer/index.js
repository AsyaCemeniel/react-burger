import { combineReducers } from "redux";
import burgerIngredients from "./burger-ingredients";
import order from "./order";

export const rootReducer = combineReducers({
  burgerIngredients,
  order,
});
