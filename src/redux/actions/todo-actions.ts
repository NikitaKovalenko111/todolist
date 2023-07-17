import { todoItemType } from "../../types";
import { ActionTypes } from "../reducers/todo-reducer";

export const getTodosAC = (target: string = '') => ( { 
    type: ActionTypes.GET_TODOS,
    target: target
})

export const setTodosAC = (todos: Array<todoItemType>) => ({
    type: ActionTypes.SET_TODOS,
    todos: todos
})

export const postTodosAC = (target: string, isCompleted: boolean = false) => ({
    type: ActionTypes.POST_TODO,
    target: target,
    isCompleted: isCompleted
})

export const putTodoAC = (isCompleted: boolean, id: number, target: string) => ({
    type: ActionTypes.CHANGE_TODO,
    isCompleted: isCompleted,
    id: id,
    target: target
})

export const deleteTodoAC = (id: number) => ({
    type: ActionTypes.DELETE_TODO,
    id: id
})