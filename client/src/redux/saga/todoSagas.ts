import { call, takeLatest, put, takeEvery, select } from 'redux-saga/effects'
import { ActionTypesTodos } from '../reducers/todo-reducer'
import todoAPI from '../../api/todo-api'
import { todoItemType, userType } from '../../types'
import {
    IDeleteTodoACType,
    getTodosAC,
    IGetTodosACType,
    IPostTodosACType,
    IPutTodoACType,
    setTodosAC,
} from '../actions/todo-actions'
import { authorizedUserSelector } from '../../selectors/user-selectors'

export function* getTodosWatcher() {
    yield takeLatest(ActionTypesTodos.GET_TODOS, getTodosWorker)
}

export function* getTodosWorker(action: IGetTodosACType) {
    const data: Array<todoItemType> = yield call(
        todoAPI.getTodos,
        action.authorId,
        action.target
    )
    yield put(setTodosAC(data))
}

export function* postTodoWatcher() {
    yield takeEvery(ActionTypesTodos.POST_TODO, postTodoWorker)
}

export function* postTodoWorker(action: IPostTodosACType) {
    const data: todoItemType = yield call(
        todoAPI.postTodo,
        action.target,
        action.isCompleted,
        action.authorId
    )
    yield put(getTodosAC(action.authorId, ''))
}

export function* putTodoWatcher() {
    yield takeEvery(ActionTypesTodos.CHANGE_TODO, putTodoWorker)
}

export function* putTodoWorker(action: IPutTodoACType) {
    const data: todoItemType = yield call(
        todoAPI.putTodo,
        action.target,
        action.isCompleted,
        action.id
    )
    const user: userType = yield select(authorizedUserSelector)
    yield put(getTodosAC(user._id, ''))
}

export function* deleteTodoWatcher() {
    yield takeEvery(ActionTypesTodos.DELETE_TODO, deleteTodoWorker)
}

export function* deleteTodoWorker(action: IDeleteTodoACType) {
    const id = action.id
    const status: number = yield call(todoAPI.deleteTodo, id)
    const user: userType = yield select(authorizedUserSelector)
    yield put(getTodosAC(user._id, ''))
}
