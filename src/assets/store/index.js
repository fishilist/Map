import {createStore, combineReducers, applyMiddleware} from "redux";
import {PathReducer} from "./PathReducer";
import {CurrentPathReducer} from "./CurrentPathReducer";
import createSagaMiddleware from 'redux-saga'
import {pathWatcher} from "../saga/PathSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    paths: PathReducer,
    currentPath: CurrentPathReducer
})
export let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(pathWatcher);