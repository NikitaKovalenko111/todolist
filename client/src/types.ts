import store from './redux/redux'
import {
    IGetTodosACType,
    ISetTodosACType,
    IPostTodosACType,
    IPutTodoACType,
    IDeleteTodoACType,
} from './redux/actions/todo-actions'
import {
    IChangeIsLoadingACType,
    IExitUserACType,
    IRegistrationACType,
    ISetRegistratedUserACType,
    ISetUsersACType,
} from './redux/actions/user-actions'

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

export type ActionCreatorTypes =
    | IGetTodosACType
    | ISetTodosACType
    | IPostTodosACType
    | IPutTodoACType
    | IDeleteTodoACType
    | IRegistrationACType
    | ISetRegistratedUserACType
    | ISetUsersACType
    | IExitUserACType
    | IChangeIsLoadingACType
