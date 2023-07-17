import { call, takeLatest, put, takeEvery, select } from 'redux-saga/effects'
import { ActionTypes } from '../reducers/todo-reducer'
import todoAPI from '../../api/todo-api'
import { todoItemType } from '../../types'
import { getTodosAC, setTodosAC } from '../actions/todo-actions'
import { AnyAction } from 'redux'

export function* getTodosWatcher() {
    yield takeLatest(ActionTypes.GET_TODOS, getTodosWorker)
}

function* getTodosWorker(action: AnyAction) { 
    const data: Array<todoItemType> = yield call(todoAPI.getTodos, action.target)
    yield put(setTodosAC(data))
}

export function* postTodoWatcher() {
    yield takeEvery(ActionTypes.POST_TODO, postTodoWorker)
}

export function* postTodoWorker(action: AnyAction) {
    const data: todoItemType = yield call(todoAPI.postTodo, action.target, action.isCompleted)
    yield put(getTodosAC(''))
}

export function* putTodoWatcher() {
    yield takeEvery(ActionTypes.CHANGE_TODO, putTodoWorker)
}

export function* putTodoWorker(action: AnyAction) {
    const data: todoItemType = yield call(todoAPI.putTodo, action.target, action.isCompleted, action.id)
    yield put(getTodosAC())
}

export function* deleteTodoWatcher() {
    yield takeEvery(ActionTypes.DELETE_TODO, deleteTodoWorker)
}

export function* deleteTodoWorker(action: AnyAction) {
    const id = action.id
    const status: number = yield call(todoAPI.deleteTodo, id)
    yield put(getTodosAC())
}