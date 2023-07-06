import { call, takeLatest, put } from 'redux-saga/effects'
import { ActionTypes } from '../reducers/todo-reducer'
import todoAPI from '../../api/todo-api'
import { todoItemType } from '../../types'
import { setTodosAC } from '../actions/todo-actions'

export function* getTodosWatcher() {
    yield takeLatest(ActionTypes.GET_TODOS, getTodosWorker)
}

function* getTodosWorker() { 
    const data: Array<todoItemType> = yield call(todoAPI.getTodos)
    yield put(setTodosAC(data))
}