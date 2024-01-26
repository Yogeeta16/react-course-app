// src/store.js
import { createStore } from "redux";
import rootReducer from "./redux/reducers/reducers"; // Create this file next

const store = createStore(rootReducer);

export default store;
