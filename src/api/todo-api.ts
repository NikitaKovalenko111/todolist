import axios from 'axios'
import { todoItemType, todoResolve } from '../types'

type todoAPIType = {
    getTodos: (authorId: string, target: string) => Promise<todoResolve>
    postTodo: (target: string, isCompleted: boolean, authorId: string) => Promise<todoItemType>
    putTodo: (target: string, isCompleted: boolean, id: string | null) => Promise<todoItemType>
    deleteTodo: (id: string | null) => Promise<number>
}

const axiosInstance = axios.create({
    baseURL: 'https://todolist-api-fci2.onrender.com/todos'
})

const todoAPI: todoAPIType = {
    getTodos: (authorId, target) => {   
        return axiosInstance.post(`/get`, { target: target, authorId: authorId }).then((res) => {       
            return res.data
        })
    },
    postTodo: (target, isCompleted, authorId) => {
        return axiosInstance.post('/', {
            target: target,
            isCompleted: isCompleted,
            authorId: authorId
        }).then((res) => res.data)
    },
    putTodo: (target, isCompleted, id) => {
        return axiosInstance.patch(`/${id}`, {
            target: target,
            isCompleted: isCompleted,
        }).then(res => res.data)
    },
    deleteTodo: (id) => {
        return axiosInstance.delete(`/${id}`).then(res => res.status)
    }
}

export default todoAPI