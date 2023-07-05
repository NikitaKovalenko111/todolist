import axios from 'axios'
import { todoResolve } from '../types'

type todoAPIType = {
    getTodos: () => Promise<todoResolve>
}

const axiosInstance = axios.create({
    baseURL: 'https://todolist-api-pe58.onrender.com/todos',
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})

const todoAPI: todoAPIType = {
    getTodos: () => {  
        return axiosInstance.get('/').then((res) => res.data)
    }
}

export default todoAPI