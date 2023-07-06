import axios from 'axios'
import { todoItemType, todoResolve } from '../types'

type todoAPIType = {
    getTodos: () => Promise<todoResolve>
    postTodo: (target: string, isCompleted: boolean) => Promise<todoItemType>
    putTodo: (target: string, isCompleted: boolean, id: number | null) => Promise<todoItemType>
}

const axiosInstance = axios.create({
    baseURL: 'https://todolist-api-fci2.onrender.com',
})

const todoAPI: todoAPIType = {
    getTodos: () => {   
        return axiosInstance.get('/todos').then((res) => res.data)
    },
    postTodo: (target, isCompleted) => {
        return axiosInstance.post('/todos', {
            target: target,
            isCompleted: isCompleted
        }).then((res) => res.data)
    },
    putTodo: (target, isCompleted, id) => {
        return axiosInstance.put(`/todos/${id}`, {
            target: target,
            isCompleted: isCompleted,
        }).then(res => res.data)
    }
}

export default todoAPI