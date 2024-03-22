import { call, put, takeLatest } from 'redux-saga/effects'
import { ActionTypesUsers } from '../reducers/user-reducer'
import {
    IAuthorizationACType,
    IAuthorizationByTokenACType,
    changeIsLoading,
    IGetUsersACType,
    IRegistrationACType,
    setRegistratedUserAC,
    setUsersAC,
} from '../actions/user-actions'
import { userTokenType, userType } from '../../types'
import userAPI from '../../api/user-api'

export function* registrationSagaWatcher() {
    yield takeLatest(ActionTypesUsers.REG, registrationSagaWorker)
}

export function* registrationSagaWorker(action: IRegistrationACType) {
    const data: userType = yield call(
        userAPI.registration,
        action.payload.username,
        action.payload.password
    )
    yield put(setRegistratedUserAC(data.username, data._id))
}

export function* authorizationSagaWatcher() {
    yield takeLatest(ActionTypesUsers.AUTH, authorizationSagaWorker)
}

export function* authorizationSagaWorker(action: IAuthorizationACType) {
    const data: userTokenType = yield call(
        userAPI.authorization,
        action.payload.username,
        action.payload.password
    )
    localStorage.setItem('TOKEN', data.token)

    yield put(setRegistratedUserAC(data.username, data._id))
}

export function* authByTokenSagaWatcher() {
    yield takeLatest(ActionTypesUsers.AUTH_BY_TOKEN, authByTokenSagaWorker)
}

export function* authByTokenSagaWorker(action: IAuthorizationByTokenACType) {
    const data: userType = yield call(
        userAPI.authorizationByToken,
        action.payload.token
    )

    yield put(setRegistratedUserAC(data.username, data._id))
}

export function* getUsersSagaWatcher() {
    yield takeLatest(ActionTypesUsers.GET_USERS, getUsersSagaWorker)
}

export function* getUsersSagaWorker(action: IGetUsersACType) {
    yield put(changeIsLoading(true))
    const data: Array<userType> = yield call(userAPI.getUsers)

    yield put(setUsersAC(data))
    yield put(changeIsLoading(false))
}
