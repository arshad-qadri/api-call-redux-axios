import { combineReducers } from "redux";
import getApiData from "./getApiData";

const rootReducer = combineReducers({
  api: getApiData,
});

export default rootReducer;
