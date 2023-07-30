import {put, takeEvery} from 'redux-saga/effects'
import {addPathCreator, ASYNC_ADD_PATH, ASYNC_SET_PATH, setPathCreator} from "../store/PathReducer";

function* addPathWorker() {
    // yield delay(1000ms)
    yield put(addPathCreator())
}

function* setPathWorker() {
    // yield delay(1000ms)
    yield put(setPathCreator())
}

export function* pathWatcher() {
    yield takeEvery(ASYNC_ADD_PATH, addPathWorker);
    yield takeEvery(ASYNC_SET_PATH, setPathWorker);
}