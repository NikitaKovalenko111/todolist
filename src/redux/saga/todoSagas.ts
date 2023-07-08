import { call, takeLatest, put, takeEvery, select } from 'redux-saga/effects'
import { ActionTypes } from '../reducers/todo-reducer'
import todoAPI from '../../api/todo-api'
import { todoItemType } from '../../types'
import { getTodosAC, setTodosAC } from '../actions/todo-actions'
import { todoCurrentDataSelector, todoCurrentTargetSelector, todoQuerySelector } from '../../selectors/todo-selectors'

export function* getTodosWatcher() {
    yield takeLatest(ActionTypes.GET_TODOS, getTodosWorker)
}

function* getTodosWorker() { 
    const query: { target: string } = yield select(todoQuerySelector)

    const data: Array<todoItemType> = yield call(todoAPI.getTodos, query.target)
    yield put(setTodosAC(data))
}

export function* postTodoWatcher() {
    yield takeEvery(ActionTypes.POST_API_TODO, postTodoWorker)
}

export function* postTodoWorker() {
    const currentData: { target: string, isCompleted: boolean } = yield select(todoCurrentDataSelector)
    const data: todoItemType = yield call(todoAPI.postTodo, currentData.target, currentData.isCompleted)
    yield put(getTodosAC())
}

export function* putTodoWatcher() {
    yield takeEvery(ActionTypes.CHANGE_ISCOMPLETED_API, putTodoWorker)
}

export function* putTodoWorker() {
    const currentData: { target: string, isCompleted: boolean, id: number | null } = yield select(todoCurrentDataSelector)
    const currentTarget: string = yield select(todoCurrentTargetSelector)
    const data: todoItemType = yield call(todoAPI.putTodo, currentTarget, currentData.isCompleted, currentData.id)
    yield put(getTodosAC())
}

export function* deleteTodoWatcher() {
    yield takeEvery(ActionTypes.DELETE_TODO_API, deleteTodoWorker)
}

export function* deleteTodoWorker() {
    const currentData: { target: string, isCompleted: boolean, id: number | null } = yield select(todoCurrentDataSelector)
    const id = currentData.id
    const status: number = yield call(todoAPI.deleteTodo, id)
    yield put(getTodosAC())
}