import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducer";

export const history = createBrowserHistory();
const enhancer = applyMiddleware(thunk, routerMiddleware(history));

export default createStore(rootReducer(history), composeWithDevTools(enhancer));
