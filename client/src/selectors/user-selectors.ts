import { RootState } from '../types'

export const authorizedUserSelector = (state: RootState) =>
    state.users.authorizedUser

export const usersSelector = (state: RootState) => state.users.users

export const isLoadingSelector = (state: RootState) => state.users.isLoading
