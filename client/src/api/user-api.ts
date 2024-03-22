import axios from 'axios'
import { userType } from '../types'

type userAPIType = {
    registration: (username: string, password: string) => Promise<userType>
    authorization: (username: string, password: string) => Promise<userType>
    authorizationByToken: (token: string) => Promise<userType>
    getUsers: () => Promise<Array<userType>>
}

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_PATH}/users`,
})

const userAPI: userAPIType = {
    registration: (username, password) => {
        return axiosInstance
            .post('/registration', { username: username, password: password })
            .then((el) => el.data)
    },

    authorization: (username, password) => {
        return axiosInstance
            .post('/authorization', { username: username, password: password })
            .then((el) => el.data)
    },

    authorizationByToken: (token) => {
        return axiosInstance
            .get(`/authorization/${token}`)
            .then((el) => el.data)
    },

    getUsers: () => {
        return axiosInstance.get(`/`).then((el) => el.data)
    },
}

export default userAPI
