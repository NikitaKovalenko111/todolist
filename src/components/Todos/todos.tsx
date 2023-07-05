import cn from 'classnames'
import style from './../../sass/todos.module.sass'
import Todo from './todo'
import { useSelector } from 'react-redux'
import { todosSelector } from '../../selectors/todo-selectors'
import { todoItemType, AppDispatch } from '../../types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTodosAC } from '../../redux/actions/todo-actions'

type PropsType = {}

const Todos: React.FC<PropsType> = (): JSX.Element => {

    const todos: Array<todoItemType> = useSelector(todosSelector)
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodosAC())
        console.log(111);
    }, [])

    useEffect(() => {
        console.log(todos);
        
    }, [todos])

    return (
        <section className={cn(style.todos)}>
            <div className={cn("container", style.container)}>
                {
                    /*todos.map((el: todoItemType) => {
                        return <Todo target={el.target} id={el.id} isCompleted={el.isCompleted} date={el.date} dateIsCompleted={el.dateIsCompleted} />
                    })*/
                }
            </div>
        </section>
    )
}

export default Todos