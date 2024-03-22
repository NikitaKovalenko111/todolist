import { all, fork } from 'redux-saga/effects'
import {
    deleteTodoWatcher,
    getTodosWatcher,
    postTodoWatcher,
    putTodoWatcher,
} from './todoSagas'
import {
    authByTokenSagaWatcher,
    authorizationSagaWatcher,
    registrationSagaWatcher,
    getUsersSagaWatcher,
} from './userSagas'

function* rootSaga() {
    yield all([
        fork(getTodosWatcher),
        fork(postTodoWatcher),
        fork(putTodoWatcher),
        fork(deleteTodoWatcher),
        fork(registrationSagaWatcher),
        fork(authorizationSagaWatcher),
        fork(authByTokenSagaWatcher),
        fork(getUsersSagaWatcher),
    ])
}

export default rootSaga
