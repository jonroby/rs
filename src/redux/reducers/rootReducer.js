import { combineReducers } from "redux";

import properties from "./properties";
import details from "./details";

export default combineReducers({
  properties,
  details,
});
