import { ActionCreatorTypes, RootState, userType } from "../../types"

export type initialStateType = {
    authorizedUser: false | {
        _id: string
        username: string
    }

    users: Array<userType>
    isLoading: boolean
}

export enum ActionTypesUsers {
    REG = 'user/REGISTRATION',
    SET_REG_USER = 'user/SET_REG_USER',
    AUTH = 'user/AUTHORIZATION',
    AUTH_BY_TOKEN = 'user/AUTHORIZATION_BY_TOKEN',
    GET_USERS = 'user/GET_USERS',
    GET_USER_BY_ID = 'user/GET_USER_BY_ID',
    SET_USERS = 'user/SET_USERS',
    EXIT = 'user/EXIT',
    CHANGE_IS_LOADING = 'user/CHANGE_IS_LOADING'
}

const initialState: initialStateType = {
    authorizedUser: false,
    users: [],
    isLoading: false
}

const userReducer = (state: initialStateType = initialState, action: ActionCreatorTypes): RootState => {
    switch (action.type) {
        case ActionTypesUsers.SET_REG_USER: {
            return {...state, authorizedUser: { _id: action.payload._id, username: action.payload.username }}
        }

        case ActionTypesUsers.SET_USERS: {
            return {...state, users: action.payload.users}
        }

        case ActionTypesUsers.EXIT: {
            return {...state, authorizedUser: false }
        }

        case ActionTypesUsers.CHANGE_IS_LOADING: {
            return {...state, isLoading: action.payload.value}
        }

        default: {
            return state
        }
    }
}

export default userReducer