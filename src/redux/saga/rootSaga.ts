import { all, takeEvery, fork } from 'redux-saga/effects'
import { getTodosWatcher, postTodoWatcher } from './todoSagas'

function* rootSaga() {
    yield all([
        fork(getTodosWatcher),
        fork(postTodoWatcher)
    ])
}

export default rootSaga