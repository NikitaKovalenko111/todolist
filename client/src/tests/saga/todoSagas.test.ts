import { ActionTypesTodos } from '../../redux/reducers/todo-reducer'
import {
    deleteTodoWatcher,
    getTodosWatcher,
    getTodosWorker,
    postTodoWatcher,
    postTodoWorker,
    putTodoWatcher,
    putTodoWorker,
    deleteTodoWorker,
} from '../../redux/saga/todoSagas'
import { takeLatest, takeEvery } from 'redux-saga/effects'

jest.mock('././../../api/todo-api.ts')

describe('SAGA WATCHERS TESTS', () => {
    test('GET TODOS TEST', () => {
        const gen = getTodosWatcher()

        expect(gen.next().value).toEqual(
            takeLatest(ActionTypesTodos.GET_TODOS, getTodosWorker)
        )
    })

    test('POST TODO TEST', () => {
        const gen = postTodoWatcher()

        expect(gen.next().value).toEqual(
            takeEvery(ActionTypesTodos.POST_TODO, postTodoWorker)
        )
    })

    test('PUT TODO TEST', () => {
        const gen = putTodoWatcher()

        expect(gen.next().value).toEqual(
            takeEvery(ActionTypesTodos.CHANGE_TODO, putTodoWorker)
        )
    })

    test('DELETE TODO TEST', () => {
        const gen = deleteTodoWatcher()

        expect(gen.next().value).toEqual(
            takeEvery(ActionTypesTodos.DELETE_TODO, deleteTodoWorker)
        )
    })
})
