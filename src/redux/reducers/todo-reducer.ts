import { RootState, todoItemType } from "../../types"
import { AnyAction } from "@reduxjs/toolkit"

interface initialStateType {
    todos: Array<todoItemType>
    currentData: {
        target: string,
        isCompleted: boolean,
        id: number | null
    }
    query: {
        target: string
    }
}

export enum ActionTypes {
    GET_TODOS = "todo/GET_TODOS",
    SET_TODOS = "todo/SET_TODOS",
    POST_TODO = "todo/POST_TODO",
    POST_API_TODO = "todo/POST_TODO_API",
    CHANGE_ISCOMPLETED = "todo/CHANGE_ISCOMPLETED",
    CHANGE_ISCOMPLETED_API = "todo/CHANGE_ISCOMPLETED_API",
    DELETE_TODO = "todo/DELETE_TODO",
    DELETE_TODO_API = "todo/DELETE_TODO_API",
    CHANGE_QUERY = "todo/CHANGE_QUERY"
}

const initialState: initialStateType = {
    todos: [],
    currentData: {
        target: '',
        isCompleted: false,
        id: null
    },
    query: {
        target: ''
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
        case ActionTypes.CHANGE_ISCOMPLETED: {
            return { ...state, currentData: {
                isCompleted: action.isCompleted,
                id: action.id
            } }
        }
        case ActionTypes.DELETE_TODO: {
            return {
                ...state, currentData: {
                    id: action.id
                }
            }
        }
        case ActionTypes.CHANGE_QUERY: {
            return {
                ...state, query: {
                    target: action.target
                }
            }
        }
        default:
            return state
    }
}

export default todoReducer