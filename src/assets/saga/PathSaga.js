/*
import {put, takeEvery, call} from 'redux-saga/effects'

const fetchPath = () => {
    return fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
}

function* setPathWorker() {
    const data = yield call(fetchPath)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setPath())
}

export function* pathWatcher() {
    yield takeEvery(ASYNC_SET_PATH, setPathWorker);
}
*/