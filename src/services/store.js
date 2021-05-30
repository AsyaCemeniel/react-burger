import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducer";

const enhancer = applyMiddleware(thunk);

export default createStore(rootReducer, composeWithDevTools(enhancer));
