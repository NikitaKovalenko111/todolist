import { createSelector } from "@reduxjs/toolkit";
import { RootState, todoItemType } from "../types";

export const todosSelector = (state: RootState) => state.todos.todos 

export const todoCurrentDataSelector = (state: RootState) => ({
    target: state.todos.currentData.target,
    isCompleted: state.todos.currentData.isCompleted,
    id: state.todos.currentData.id
})

export const todoCurrentTargetSelector = createSelector([todosSelector, todoCurrentDataSelector], (todos: Array<todoItemType>, data) => {
    return todos.find(el => data.id == el.id)?.target
})

export const todoQuerySelector = (state: RootState) => ({
    target: state.todos.query.target
})
