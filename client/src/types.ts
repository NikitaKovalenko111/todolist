import store from "./redux/redux"
import { getTodosACType, setTodosACType, postTodosACType, putTodoACType, deleteTodoACType } from "./redux/actions/todo-actions"
import { changeIsLoadingACType, exitUserACType, registrationACType, setRegistratedUserACType, setUsersACType } from "./redux/actions/user-actions"

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type todoItemType = {
    target: string
    _id: string
    isCompleted: boolean
    date: Date | string
    dateIsCompleted?: Date | string
    authorId: string
}

export type todoResolve = Array<todoItemType>

export type userType = {
    username: string
    _id: string
}

export type userTokenType = {
    token: string
    username: string
    _id: string
}

export type ActionCreatorTypes = getTodosACType | setTodosACType | postTodosACType | putTodoACType | deleteTodoACType | registrationACType | setRegistratedUserACType | setUsersACType | exitUserACType | changeIsLoadingACType