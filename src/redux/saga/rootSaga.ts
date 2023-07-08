import { all, takeEvery, fork } from 'redux-saga/effects'
import { deleteTodoWatcher, getTodosWatcher, postTodoWatcher, putTodoWatcher } from './todoSagas'

function* rootSaga() {
    yield all([
        fork(getTodosWatcher),
        fork(postTodoWatcher),
        fork(putTodoWatcher),
        fork(deleteTodoWatcher)
    ])
}

export default rootSaga