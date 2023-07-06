import { todoItemType } from "../../types";
import { ActionTypes } from "../reducers/todo-reducer";

export const getTodosAC = () => ({ type: ActionTypes.GET_TODOS })

export const setTodosAC = (todos: Array<todoItemType>) => ({
    type: ActionTypes.SET_TODOS,
    todos: todos
})

export const postTodosApiAC = () => ({
    type: ActionTypes.POST_API_TODO
})

export const postTodosAC = (target: string) => ({
    type: ActionTypes.POST_TODO,
    target: target,
})

export const putTodoAC = (isCompleted: boolean, id: number) => ({
    type: ActionTypes.CHANGE_ISCOMPLETED,
    isCompleted: isCompleted,
    id: id
})

export const putTodoApiAC = () => ({
    type: ActionTypes.CHANGE_ISCOMPLETED_API
})