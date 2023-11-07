import { all, takeEvery, fork } from 'redux-saga/effects'
import { deleteTodoWatcher, getTodosWatcher, postTodoWatcher, putTodoWatcher } from './todoSagas'
import { authByTokenSagaWatcher, authorizationSagaWatcher, registrationSagaWatcher } from './userSagas'

function* rootSaga() {
    yield all([
        fork(getTodosWatcher),
        fork(postTodoWatcher),
        fork(putTodoWatcher),
        fork(deleteTodoWatcher),
        fork(registrationSagaWatcher),
        fork(authorizationSagaWatcher),
        fork(authByTokenSagaWatcher)
    ])
}

export default rootSaga