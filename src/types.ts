import store from "./redux/redux"

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type todoItemType = {
    target: string
    id: number
    isCompleted: boolean
    date: string
    dateIsCompleted: string
}

export type todoResolve = Array<todoItemType>