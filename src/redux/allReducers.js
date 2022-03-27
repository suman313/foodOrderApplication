import { combineReducers } from "redux";
import pageReducer from "../components/pages/pageReducer";

const allReducers = combineReducers({
  page: pageReducer,
});

export default allReducers;
