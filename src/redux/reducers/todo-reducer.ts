import { RootState, todoItemType } from "../../types"
import { AnyAction } from "@reduxjs/toolkit"

interface initialStateType {
    todos: Array<todoItemType>
}

export enum ActionTypes {
    GET_TODOS = "todo/GET_TODOS",
    SET_TODOS = "todo/SET_TODOS"
}

const initialState = {
    todos: []
}

const todoReducer = (state: initialStateType = initialState, action: AnyAction): RootState => {
    switch (action.type) {
        case ActionTypes.SET_TODOS: {
            state.todos = action.todos
            return state
        }

        default:
            return state
    }
}

export default todoReducer