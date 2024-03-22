import { userType } from '../../types'
import { ActionTypesUsers } from '../reducers/user-reducer'

export interface IRegistrationACType {
    type: typeof ActionTypesUsers.REG
    payload: {
        username: string
        password: string
    }
}

export interface ISetRegistratedUserACType {
    type: typeof ActionTypesUsers.SET_REG_USER
    payload: {
        _id: string
        username: string
    }
}

export interface IAuthorizationACType {
    type: typeof ActionTypesUsers.AUTH
    payload: {
        username: string
        password: string
    }
}

export interface IAuthorizationByTokenACType {
    type: typeof ActionTypesUsers.AUTH_BY_TOKEN
    payload: {
        token: string
    }
}

export interface IGetUsersACType {
    type: typeof ActionTypesUsers.GET_USERS
}

export interface ISetUsersACType {
    type: typeof ActionTypesUsers.SET_USERS
    payload: {
        users: Array<userType>
    }
}

export interface IExitUserACType {
    type: typeof ActionTypesUsers.EXIT
}

export interface IChangeIsLoadingACType {
    type: typeof ActionTypesUsers.CHANGE_IS_LOADING
    payload: {
        value: boolean
    }
}

export const registrationAC = (
    username: string,
    password: string
): IRegistrationACType => ({
    type: ActionTypesUsers.REG,
    payload: {
        username: username,
        password: password,
    },
})

export const setRegistratedUserAC = (
    username: string,
    _id: string
): ISetRegistratedUserACType => ({
    type: ActionTypesUsers.SET_REG_USER,
    payload: {
        username: username,
        _id: _id,
    },
})

export const authorizationAC = (
    username: string,
    password: string
): IAuthorizationACType => ({
    type: ActionTypesUsers.AUTH,
    payload: {
        username: username,
        password: password,
    },
})

export const authorizationByTokenAC = (
    token: string
): IAuthorizationByTokenACType => ({
    type: ActionTypesUsers.AUTH_BY_TOKEN,
    payload: {
        token: token,
    },
})

export const getUsersAC = (): IGetUsersACType => ({
    type: ActionTypesUsers.GET_USERS,
})

export const setUsersAC = (users: Array<userType>): ISetUsersACType => ({
    type: ActionTypesUsers.SET_USERS,
    payload: {
        users: users,
    },
})

export const exitAC = (): IExitUserACType => ({
    type: ActionTypesUsers.EXIT,
})

export const changeIsLoading = (value: boolean): IChangeIsLoadingACType => ({
    type: ActionTypesUsers.CHANGE_IS_LOADING,
    payload: {
        value: value,
    },
})
