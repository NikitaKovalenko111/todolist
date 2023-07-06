import { RootState, todoItemType } from "../../types"
import { AnyAction } from "@reduxjs/toolkit"

interface initialStateType {
    todos: Array<todoItemType>
    currentData: {
        target: string,
        isCompleted: boolean
    }
}

export enum ActionTypes {
    GET_TODOS = "todo/GET_TODOS",
    SET_TODOS = "todo/SET_TODOS",
    POST_TODO = "todo/POST_TODO",
    POST_API_TODO = "todo/POST_TODO_API"
}

const initialState: initialStateType = {
    todos: [],
    currentData: {
        target: '',
        isCompleted: false
    }
}

const todoReducer = (state: initialStateType = initialState, action: AnyAction): RootState => {
    switch (action.type) {
        case ActionTypes.SET_TODOS: {   
            return { ...state, todos: action.todos }
        }
        case ActionTypes.POST_TODO: {
            return { ...state, currentData: {
                target: action.target,
                isCompleted: false
            } }
        }
        default:
            return state
    }
}

export default todoReducer