import store from "./redux/redux"

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type todoItemType = {
    target: string
    _id: string
    isCompleted: boolean
    date: Date | string
    dateIsCompleted?: Date | string
}

export type todoResolve = Array<todoItemType>