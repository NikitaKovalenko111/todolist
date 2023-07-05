import { all, takeEvery, fork } from 'redux-saga/effects'
import { getTodosWatcher } from './todoSagas'

function* rootSaga() {
    yield all([
        fork(getTodosWatcher)
    ])
}

export default rootSaga