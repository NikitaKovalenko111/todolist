import { call, takeLatest, put, takeEvery, select } from 'redux-saga/effects'
import { ActionTypes } from '../reducers/todo-reducer'
import todoAPI from '../../api/todo-api'
import { todoItemType } from '../../types'
import { getTodosAC, setTodosAC } from '../actions/todo-actions'
import { todoCurrentDataSelector } from '../../selectors/todo-selectors'

export function* getTodosWatcher() {
    yield takeLatest(ActionTypes.GET_TODOS, getTodosWorker)
}

function* getTodosWorker() { 
    const data: Array<todoItemType> = yield call(todoAPI.getTodos)
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