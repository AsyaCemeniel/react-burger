import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { history, rootReducer } from "./reducer";
import * as api from "../utils/burger-api";
import { wsFeedActions } from "./feed-actions";
import { wsOrdersActions } from "./orders-actions";
import { socketMiddleware } from "./middleware/socketMiddleware";

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
  socketMiddleware(api.BURGER_API_WSS_FEED, wsFeedActions),
  socketMiddleware(api.getWssOrderUrlWithToken, wsOrdersActions)
);

export default createStore(rootReducer, composeWithDevTools(enhancer));
