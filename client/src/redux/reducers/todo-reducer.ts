import { RootState, todoItemType } from "../../types"
import { ActionCreatorTypes } from "../../types"

export interface initialStateType {
    todos: Array<todoItemType>
}

export enum ActionTypesTodos {
    GET_TODOS = "todo/GET_TODOS",
    SET_TODOS = "todo/SET_TODOS",
    POST_TODO = "todo/POST_TODO_API",
    CHANGE_TODO = "todo/CHANGE_ISCOMPLETED_API",
    DELETE_TODO = "todo/DELETE_TODO_API",
}

const initialState: initialStateType = {
    todos: [],
}

const todoReducer = (state: initialStateType = initialState, action: ActionCreatorTypes): RootState => {
    switch (action.type) {
        case ActionTypesTodos.SET_TODOS: {
            return { ...state, todos: action.todos }
        }
        default:
            return state
    }
}

export default todoReducer