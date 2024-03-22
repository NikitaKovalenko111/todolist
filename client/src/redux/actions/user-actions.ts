import { userType } from "../../types"
import { ActionTypesUsers } from "../reducers/user-reducer"

export interface registrationACType {
    type: typeof ActionTypesUsers.REG
    payload: {
        username: string
        password: string
    }
}

export interface setRegistratedUserACType {
    type: typeof ActionTypesUsers.SET_REG_USER
    payload: {
        _id: string
        username: string
    }
}

export interface authorizationACType {
    type: typeof ActionTypesUsers.AUTH
    payload: {
        username: string
        password: string
    }
}

export interface authorizationByTokenACType {
    type: typeof ActionTypesUsers.AUTH_BY_TOKEN
    payload: {
        token: string
    }
}

export interface getUsersACType {
    type: typeof ActionTypesUsers.GET_USERS
}

export interface setUsersACType {
    type: typeof ActionTypesUsers.SET_USERS
    payload: {
        users: Array<userType>
    }
}

export interface exitUserACType {
    type: typeof ActionTypesUsers.EXIT
}

export interface changeIsLoadingACType {
    type: typeof ActionTypesUsers.CHANGE_IS_LOADING
    payload: {
        value: boolean
    }
}

export const registrationAC = (username: string, password: string): registrationACType => ({
    type: ActionTypesUsers.REG,
    payload: {
        username: username,
        password: password
    }
})

export const setRegistratedUserAC = (username: string, _id: string): setRegistratedUserACType => ({
    type: ActionTypesUsers.SET_REG_USER,
    payload: {
        username: username,
        _id: _id
    }
})

export const authorizationAC = (username: string, password: string): authorizationACType => ({
    type: ActionTypesUsers.AUTH,
    payload: {
        username: username,
        password: password
    }
})

export const authorizationByTokenAC = (token: string): authorizationByTokenACType => ({
    type: ActionTypesUsers.AUTH_BY_TOKEN,
    payload: {
        token: token
    }
})

export const getUsersAC = (): getUsersACType => ({
    type: ActionTypesUsers.GET_USERS
})

export const setUsersAC = (users: Array<userType>): setUsersACType => ({
    type: ActionTypesUsers.SET_USERS,
    payload: {
        users: users
    }
})

export const exitAC = (): exitUserACType => ({
    type: ActionTypesUsers.EXIT
})

export const changeIsLoading = (value: boolean): changeIsLoadingACType => ({
    type: ActionTypesUsers.CHANGE_IS_LOADING,
    payload: {
        value: value
    }
})