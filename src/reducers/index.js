import { createStore, combineReducers } from "redux";
import user from "./user";
import global from "./global";

const state = combineReducers({ user, global})

const store = createStore(
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
