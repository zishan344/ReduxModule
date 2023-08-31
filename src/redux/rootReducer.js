import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  counterDynamic: dynamicCounterReducer,
});

export default rootReducer;
