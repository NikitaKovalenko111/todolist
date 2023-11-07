import { todoItemType, todoResolve } from '../../types'
import todoAPI from './../../api/todo-api'

jest.mock('./../../api/todo-api')

describe('API TESTS', () => {
    let response: todoResolve | null = null
    const todoApiMock = (todoAPI as jest.Mocked<typeof todoAPI>)

    test('GET DATA API TEST', async () => {
        let items: todoResolve = [
            {
                _id: '1689577395845',
                target: "Цель",
                isCompleted: false,
                date: "7/17/2023, 7:03:15 AM",
                authorId: '1'
            }
        ]

        response = items

        todoApiMock.getTodos.mockResolvedValue(response)

        const data: todoResolve = await todoAPI.getTodos('1', '') 

        expect(todoApiMock.getTodos).toBeCalledTimes(1)
        expect(data).toEqual(response)
    })

    test('POST DATA API TEST', async () => {
        let postData: { target: string, isCompleted: boolean, authorId: string } = {
            target: 'Тест',
            isCompleted: false,
            authorId: '1'
        }

        let resolveData: todoItemType = {
            _id: '1',
            target: 'Тест',
            isCompleted: false,
            date: 'date',
            authorId: '1'
        }

        todoApiMock.postTodo.mockResolvedValue(resolveData)

        const data: todoItemType = await todoAPI.postTodo(postData.target, postData.isCompleted, postData.authorId)

        expect(todoApiMock.postTodo).toBeCalledTimes(1)
        expect(data).toEqual(resolveData)
    })

    test('PUT TODO API TEST', async () => {
        const putData: { target: string, isCompleted: boolean, _id: string } = {
            target: 'Тест',
            isCompleted: true,
            _id: '1'
        }

        const resolveData: todoItemType = {
            target: 'Тест',
            isCompleted: true,
            _id: '1', 
            date: 'date',
            dateIsCompleted: 'date is completed',
            authorId: '1'
        }

        todoApiMock.putTodo.mockResolvedValue(resolveData)

        const data: todoItemType = await todoAPI.putTodo(putData.target, putData.isCompleted, putData._id)

        expect(todoApiMock.putTodo).toBeCalledTimes(1)
        expect(data).toEqual(resolveData)
    })

    test("DELETE TODO API TEST", async () => {
        const deleteId: string = '1'
        const resolvedStatus: number = 204
        
        todoApiMock.deleteTodo.mockResolvedValue(resolvedStatus)

        const status: number = await todoAPI.deleteTodo(deleteId)

        expect(todoApiMock.deleteTodo).toBeCalledTimes(1)
        expect(status).toBe(resolvedStatus)
    })
})