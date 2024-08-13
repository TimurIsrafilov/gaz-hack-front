import { combineReducers } from "redux";

import { reducer as userReducer } from "./user/reducer";
import { reducer as workerReducer } from "./worker/reducer";
import { reducer as searchReducer } from "./search/reducer";

export const reducer = combineReducers({
  user: userReducer,
  worker: workerReducer,
  search: searchReducer,
});
