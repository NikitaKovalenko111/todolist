import { combineReducers, Reducer, applyMiddleware, createStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/rootSaga'
import todoReducer from './reducers/todo-reducer'
//@ts-ignore
const reducers: Reducer = combineReducers({
  todos: todoReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
