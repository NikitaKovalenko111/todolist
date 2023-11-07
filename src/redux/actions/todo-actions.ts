import { todoResolve } from "../../types"
import { ActionTypesTodos } from "../reducers/todo-reducer"

export interface getTodosACType {
    type: typeof ActionTypesTodos.GET_TODOS,
    target: string,
    authorId: string
}

export interface setTodosACType {
    type: typeof ActionTypesTodos.SET_TODOS,
    todos: todoResolve
}

export interface postTodosACType {
    type: typeof ActionTypesTodos.POST_TODO,
    target: string,
    isCompleted: boolean
    authorId: string
}

export interface putTodoACType {
    type: typeof ActionTypesTodos.CHANGE_TODO,
    isCompleted: boolean,
    id: string,
    target: string
}

export interface deleteTodoACType {
    type: typeof ActionTypesTodos.DELETE_TODO,
    id: string
}

export const getTodosAC = (authorId: string, target: string = ''): getTodosACType => ( { 
    type: ActionTypesTodos.GET_TODOS,
    target: target,
    authorId: authorId
})

export const setTodosAC = (todos: todoResolve): setTodosACType => ({
    type: ActionTypesTodos.SET_TODOS,
    todos: todos
})

export const postTodosAC = (target: string, isCompleted: boolean = false, authorId: string): postTodosACType => ({
    type: ActionTypesTodos.POST_TODO,
    target: target,
    isCompleted: isCompleted,
    authorId: authorId
})

export const putTodoAC = (isCompleted: boolean, id: string, target: string): putTodoACType => ({
    type: ActionTypesTodos.CHANGE_TODO,
    isCompleted: isCompleted,
    id: id,
    target: target
})

export const deleteTodoAC = (id: string): deleteTodoACType => ({
    type: ActionTypesTodos.DELETE_TODO,
    id: id
})