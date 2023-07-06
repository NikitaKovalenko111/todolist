import { todoItemType } from "../../types";
import { ActionTypes } from "../reducers/todo-reducer";

export const getTodosAC = () => ({ type: ActionTypes.GET_TODOS })

export const setTodosAC = (todos: Array<todoItemType>) => ({
    type: ActionTypes.SET_TODOS,
    todos: todos
})