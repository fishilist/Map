import {createStore, combineReducers, applyMiddleware} from "redux";
import {PathReducer} from "./PathReducer";
import {CurrentPathReducer} from "./CurrentPathReducer";
import createSagaMiddleware from 'redux-saga'
//import {rootWatcher} from "../saga";

//const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    paths: PathReducer,
    currentPath: CurrentPathReducer
})

export const store = createStore(rootReducer);
//export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

//sagaMiddleware.run(rootWatcher)