import { todoResolve } from "../../types"
import { ActionTypes } from "../reducers/todo-reducer"

export interface getTodosACType {
    type: typeof ActionTypes.GET_TODOS,
    target: string
}

export interface setTodosACType {
    type: typeof ActionTypes.SET_TODOS,
    todos: todoResolve
}

export interface postTodosACType {
    type: typeof ActionTypes.POST_TODO,
    target: string,
    isCompleted: boolean
}

export interface putTodoACType {
    type: typeof ActionTypes.CHANGE_TODO,
    isCompleted: boolean,
    id: number,
    target: string
}

export interface deleteTodoACType {
    type: typeof ActionTypes.DELETE_TODO,
    id: number
}

export type ActionCreatorTypes = getTodosACType | setTodosACType | postTodosACType | putTodoACType | deleteTodoACType

export const getTodosAC = (target: string = ''): getTodosACType => ( { 
    type: ActionTypes.GET_TODOS,
    target: target
})

export const setTodosAC = (todos: todoResolve): setTodosACType => ({
    type: ActionTypes.SET_TODOS,
    todos: todos
})

export const postTodosAC = (target: string, isCompleted: boolean = false): postTodosACType => ({
    type: ActionTypes.POST_TODO,
    target: target,
    isCompleted: isCompleted
})

export const putTodoAC = (isCompleted: boolean, id: number, target: string): putTodoACType => ({
    type: ActionTypes.CHANGE_TODO,
    isCompleted: isCompleted,
    id: id,
    target: target
})

export const deleteTodoAC = (id: number): deleteTodoACType => ({
    type: ActionTypes.DELETE_TODO,
    id: id
})