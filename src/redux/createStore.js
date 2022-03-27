import { createStore } from "redux";
import allReducers from "./allReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const appStore = createStore(allReducers, composeWithDevTools());

export default appStore;
