// src/redux/reducers/index.js
import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import studentReducer from "./studentReducer";

const rootReducer = combineReducers({
  course: courseReducer,
  student: studentReducer,
});

export default rootReducer;
