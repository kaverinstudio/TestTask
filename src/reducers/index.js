import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import usersReducers from "./usersReducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducers = combineReducers({
    users: usersReducers
})

export const store = legacy_createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))