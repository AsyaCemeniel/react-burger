import { combineReducers } from "redux";
import burgerIngredients from "./burger-ingredients";
import order from "./order";
import burgerConstructor from "./burger-constructor";

export const rootReducer = combineReducers({
  burgerIngredients,
  order,
  burgerConstructor,
});
