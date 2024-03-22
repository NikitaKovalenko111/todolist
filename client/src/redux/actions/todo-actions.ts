import { todoResolve } from '../../types'
import { ActionTypesTodos } from '../reducers/todo-reducer'

export interface IGetTodosACType {
    type: typeof ActionTypesTodos.GET_TODOS
    target: string
    authorId: string
}

export interface ISetTodosACType {
    type: typeof ActionTypesTodos.SET_TODOS
    todos: todoResolve
}

export interface IPostTodosACType {
    type: typeof ActionTypesTodos.POST_TODO
    target: string
    isCompleted: boolean
    authorId: string
}

export interface IPutTodoACType {
    type: typeof ActionTypesTodos.CHANGE_TODO
    isCompleted: boolean
    id: string
    target: string
}

export interface IDeleteTodoACType {
    type: typeof ActionTypesTodos.DELETE_TODO
    id: string
}

export const getTodosAC = (
    authorId: string,
    target: string = ''
): IGetTodosACType => ({
    type: ActionTypesTodos.GET_TODOS,
    target: target,
    authorId: authorId,
})

export const setTodosAC = (todos: todoResolve): ISetTodosACType => ({
    type: ActionTypesTodos.SET_TODOS,
    todos: todos,
})

export const postTodosAC = (
    target: string,
    isCompleted: boolean = false,
    authorId: string
): IPostTodosACType => ({
    type: ActionTypesTodos.POST_TODO,
    target: target,
    isCompleted: isCompleted,
    authorId: authorId,
})

export const putTodoAC = (
    isCompleted: boolean,
    id: string,
    target: string
): IPutTodoACType => ({
    type: ActionTypesTodos.CHANGE_TODO,
    isCompleted: isCompleted,
    id: id,
    target: target,
})

export const deleteTodoAC = (id: string): IDeleteTodoACType => ({
    type: ActionTypesTodos.DELETE_TODO,
    id: id,
})
