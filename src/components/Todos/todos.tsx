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
    }, [])

    return (
        <section data-testid='todos' className={cn(style.todos)}>
            <div data-testid='container' className={cn("container", style.container)}>
                {   todos.length > 0 ?
                    todos.map((el: todoItemType) => {
                        return <Todo target={el.target} id={el._id} isCompleted={el.isCompleted} date={el.date} dateIsCompleted={el.dateIsCompleted} />
                    }) : <h1 style={{ textTransform: 'uppercase', position: 'absolute', top: '40%' }}>Пока что нет ни одной цели!</h1>
                }
            </div>
        </section>
    )
}

export default Todos