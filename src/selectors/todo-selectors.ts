import { RootState } from "../types";

export const todosSelector = (state: RootState) => state.todos.todos 

export const todoCurrentDataSelector = (state: RootState) => ({
    target: state.todos.currentData.target,
    isCompleted: state.todos.currentData.isCompleted
})
