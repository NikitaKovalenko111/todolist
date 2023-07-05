import axios from 'axios'
import { todoResolve } from '../types'

type todoAPIType = {
    getTodos: () => Promise<todoResolve>
}

const axiosInstance = axios.create({
    baseURL: 'https://todolist-api-fci2.onrender.com/todos',
})

const todoAPI: todoAPIType = {
    getTodos: () => {  
        return axiosInstance.get('/').then((res) => res.data)
    }
}

export default todoAPI