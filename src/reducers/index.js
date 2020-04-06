import expenseReducer from "./expense";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  states: expenseReducer
});

export default rootReducer;
