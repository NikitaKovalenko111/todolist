import { call, takeLatest, put, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from '../reducers/todo-reducer'
import todoAPI from '../../api/todo-api'
import { todoItemType } from '../../types'
import { setTodosAC } from '../actions/todo-actions'

export function* getTodosWatcher() {
    yield takeEvery(ActionTypes.GET_TODOS, getTodosWorker)
}

function* getTodosWorker() { 
    console.log(6565);
    
    const data: Array<todoItemType> = yield call(todoAPI.getTodos)
    yield put(setTodosAC(data))
}