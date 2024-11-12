import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import plannerReducer from "./plannerReducer";
import optimizeReducer from "./optimizeReducer";
const rootReducer = combineReducers({
  account: accountReducer,
  planner: plannerReducer,
  optimize: optimizeReducer,
});

export default rootReducer;
