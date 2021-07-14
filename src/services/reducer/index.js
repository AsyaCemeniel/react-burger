import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import burgerIngredients from "./burger-ingredients";
import order from "./order";
import burgerConstructor from "./burger-constructor";
import user from "./user";
import wsFeed from "./ws-feed";
import wsOrders from "./ws-orders";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    burgerIngredients,
    order,
    burgerConstructor,
    user,
    wsOrders,
    wsFeed,
  });
