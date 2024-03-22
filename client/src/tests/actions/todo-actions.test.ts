import { getTodosAC, setTodosAC, postTodosAC, putTodoAC, deleteTodoAC } from "../../redux/actions/todo-actions"
import { ActionTypesTodos } from "../../redux/reducers/todo-reducer"
import { todoItemType } from "../../types"

describe('TEST TODO ACTIONS', () => {
    test('GET TODOS ACTION TEST', () => {
        expect(getTodosAC('1')).toEqual({ type: ActionTypesTodos.GET_TODOS, target: "", authorId: '1' })
    })

    test('SET TODO ACTION TEST', () => {
        let todos: Array<todoItemType> = [
            {
                target: 'test',
                _id: '1',
                isCompleted: false,
                date: 'test',
                authorId: '1'
            }
        ]

        expect(setTodosAC(todos)).toEqual({ type: ActionTypesTodos.SET_TODOS, todos: todos })
    })

    test('POST TODOS ACTION TEST', () => {
        let target: string = 'test'

        expect(postTodosAC(target, false, '1')).toEqual({ type: ActionTypesTodos.POST_TODO, target: target, isCompleted: false, authorId: '1' })
    })

    test('PUT TODO ACTION TEST', () => {
        expect(putTodoAC(false, '1', 'test')).toEqual({ type: ActionTypesTodos.CHANGE_TODO, isCompleted: false, id: '1', target: 'test' })
    })

    test('DELETE TODO ACTION TEST', () => {
        expect(deleteTodoAC('1')).toEqual({ type: ActionTypesTodos.DELETE_TODO, id: '1' })
    })
})