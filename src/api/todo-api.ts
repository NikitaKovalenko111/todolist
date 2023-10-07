import axios from 'axios'
import { todoItemType, todoResolve } from '../types'

type todoAPIType = {
    getTodos: (target: string) => Promise<todoResolve>
    postTodo: (target: string, isCompleted: boolean) => Promise<todoItemType>
    putTodo: (target: string, isCompleted: boolean, id: string | null) => Promise<todoItemType>
    deleteTodo: (id: string | null) => Promise<number>
}

const axiosInstance = axios.create({
    baseURL: 'https://todolist-api-fci2.onrender.com',
})

const todoAPI: todoAPIType = {
    getTodos: (target) => {   
        return axiosInstance.get(`/todos?target=${target}`).then((res) => {       
            return res.data
        })
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
    },
    deleteTodo: (id) => {
        return axiosInstance.delete(`/todos/${id}`).then(res => res.status)
    }
}

export default todoAPI