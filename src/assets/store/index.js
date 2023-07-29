import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {PathReducer} from "./PathReducer";
import {CurrentPathReducer} from "./CurrentPathReducer";

const rootReducer = combineReducers({
    paths: PathReducer,
    currentPath: CurrentPathReducer
})
export let store;
store = createStore(rootReducer, composeWithDevTools());