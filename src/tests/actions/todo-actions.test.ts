import { getTodosAC, setTodosAC, postTodosAC, putTodoAC, deleteTodoAC } from "../../redux/actions/todo-actions"
import { ActionTypes } from "../../redux/reducers/todo-reducer"
import { todoItemType } from "../../types"

describe('TEST TODO ACTIONS', () => {
    test('GET TODOS ACTION TEST', () => {
        expect(getTodosAC()).toEqual({ type: ActionTypes.GET_TODOS, target: "" })
    })

    test('SET TODO ACTION TEST', () => {
        let todos: Array<todoItemType> = [
            {
                target: 'test',
                id: 1,
                isCompleted: false,
                date: 'test'
            }
        ]

        expect(setTodosAC(todos)).toEqual({ type: ActionTypes.SET_TODOS, todos: todos })
    })

    test('POST TODOS ACTION TEST', () => {
        let target: string = 'test'

        expect(postTodosAC(target, false)).toEqual({ type: ActionTypes.POST_TODO, target: target, isCompleted: false })
    })

    test('PUT TODO ACTION TEST', () => {
        expect(putTodoAC(false, 1, 'test')).toEqual({ type: ActionTypes.CHANGE_TODO, isCompleted: false, id: 1, target: 'test' })
    })

    test('DELETE TODO ACTION TEST', () => {
        expect(deleteTodoAC(1)).toEqual({ type: ActionTypes.DELETE_TODO, id: 1 })
    })
})