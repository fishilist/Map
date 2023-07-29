import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {PathReducer} from "./PathReducer";

const rootReducer = combineReducers({
    paths: PathReducer
})
export let store;
store = createStore(rootReducer, composeWithDevTools());