import { ActionCreatorTypes, RootState, userType } from "../../types"

export type initialStateType = {
    authorizedUser: false | {
        _id: string
        username: string
    }

    users: Array<userType>
}

export enum ActionTypesUsers {
    REG = 'user/REGISTRATION',
    SET_REG_USER = 'user/SET_REG_USER',
    AUTH = 'user/AUTHORIZATION',
    AUTH_BY_TOKEN = 'user/AUTHORIZATION_BY_TOKEN',
    GET_USERS = 'user/GET_USERS',
    GET_USER_BY_ID = 'user/GET_USER_BY_ID'
}

const initialState: initialStateType = {
    authorizedUser: false,
    users: []
}

const userReducer = (state: initialStateType = initialState, action: ActionCreatorTypes): RootState => {
    switch (action.type) {
        case ActionTypesUsers.SET_REG_USER: {
            return {...state, authorizedUser: { _id: action.payload._id, username: action.payload.username }}
        }

        default: {
            return state
        }
    }
}

export default userReducer