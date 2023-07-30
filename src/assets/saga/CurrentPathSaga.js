/*
import {put, takeEvery, call} from 'redux-saga/effects'
import {ASYNC_SET_CURRENT_PATH, setCurrentPath} from "../store/CurrentPathReducer";

const fetchCurrentPath = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchCurrentPathWorker() {
    const data = yield call(fetchCurrentPath);
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setCurrentPath(json))
}

export function* currentPathWatcher() {
    yield takeEvery(ASYNC_SET_CURRENT_PATH, fetchCurrentPathWorker);
}
*/