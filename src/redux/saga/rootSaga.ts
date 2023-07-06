import { all, takeEvery, fork } from 'redux-saga/effects'
import { getTodosWatcher, postTodoWatcher, putTodoWatcher } from './todoSagas'

function* rootSaga() {
    yield all([
        fork(getTodosWatcher),
        fork(postTodoWatcher),
        fork(putTodoWatcher)
    ])
}

export default rootSaga