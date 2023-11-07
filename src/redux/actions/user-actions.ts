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