import { getTodosAC, setTodosAC } from "../../redux/actions/todo-actions"
import { ActionTypesTodos } from "../../redux/reducers/todo-reducer"
import { deleteTodoWatcher, getTodosWatcher, getTodosWorker, postTodoWatcher, postTodoWorker, putTodoWatcher, putTodoWorker, deleteTodoWorker } from "../../redux/saga/todoSagas"
import { call, takeLatest, put, takeEvery, select } from 'redux-saga/effects'
import { todoResolve } from "../../types"
import todoAPI from '../../api/todo-api'
import { runSaga } from "redux-saga"

jest.mock('././../../api/todo-api.ts')

describe('SAGA WATCHERS TESTS', () => {
    test('GET TODOS TEST', () => {
        const gen = getTodosWatcher()

        expect(gen.next().value).toEqual(takeLatest(ActionTypesTodos.GET_TODOS, getTodosWorker))
    })

    test('POST TODO TEST', () => {
        const gen = postTodoWatcher()

        expect(gen.next().value).toEqual(takeEvery(ActionTypesTodos.POST_TODO, postTodoWorker))
    })

    test('PUT TODO TEST', () => {
        const gen = putTodoWatcher()

        expect(gen.next().value).toEqual(takeEvery(ActionTypesTodos.CHANGE_TODO, putTodoWorker))
    })

    test('DELETE TODO TEST', () => {
        const gen = deleteTodoWatcher()

        expect(gen.next().value).toEqual(takeEvery(ActionTypesTodos.DELETE_TODO, deleteTodoWorker))
    })
})

/*describe('SAGA WORKERS TESTS', () => {
    const todoApiMock = (todoAPI as jest.Mocked<typeof todoAPI>)

    test('GET TODOS', async () => {
        let response: todoResolve = [
            {
                _id: '1689577395845',
                target: "Цель",
                isCompleted: false,
                date: "7/17/2023, 7:03:15 AM",
                authorId: '1'
            }
        ]

        todoApiMock.getTodos.mockResolvedValue(response)

        const gen = getTodosWorker(getTodosAC('1', ''))

        expect(gen.next().value).toEqual(call(todoAPI.getTodos, getTodosAC('1', '').target))
    })
})*/