import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
export const allReducers = combineReducers({
  loggedIn: loggedReducer,
});

export type RootState = ReturnType<typeof allReducers>;
