import cn from 'classnames'
import style from './../../sass/todo.module.sass'
import { useState } from 'react'
import { AppDispatch } from '../../types'
import { useDispatch } from 'react-redux'
import { deleteTodoAC, putTodoAC } from '../../redux/actions/todo-actions'

type PropsType = {
    target: string
    id: string
    date: Date | string
    dateIsCompleted?: Date | string
    isCompleted: boolean
}

const Todo: React.FC<PropsType> = ({
    target,
    id,
    date,
    dateIsCompleted,
    isCompleted,
}): JSX.Element => {
    const [currentIsCompleted, changeCurrentIsCompleted] = useState(isCompleted)
    const dispatch: AppDispatch = useDispatch()

    const changeIsCompletedHandler = (): void => {
        changeCurrentIsCompleted((current) => !current)
        dispatch(putTodoAC(!currentIsCompleted, id, target))
    }

    const deleteHandler = (): void => {
        dispatch(deleteTodoAC(id))
    }

    return (
        <article
            data-testid="todo/article"
            key={id}
            className={cn(style.todoItem, {
                [style.todoItem_green]: currentIsCompleted,
            })}
        >
            <div
                data-testid="todo/close"
                onClick={deleteHandler}
                className={cn(style.delete)}
            >
                &#9587;
            </div>
            <div data-testid="todo/block" className={cn(style.block)}>
                <span data-testid="todo/target" className={cn(style.target)}>
                    {target}
                </span>
                <div className={cn(style.form_checkbox)}>
                    <input
                        type="checkbox"
                        data-testid="todo/checkbox"
                        name="isCompleted"
                        id={`isCompleted` + id}
                        onClick={changeIsCompletedHandler}
                        className={cn(style.checkbox)}
                        checked={currentIsCompleted}
                    />
                    <label htmlFor={'isCompleted' + id}></label>
                </div>
            </div>
            <div className={cn(style.subblock)}>
                <span data-testid="todo/date" className={cn(style.date)}>
                    Создано:
                    <br /> {new Date(date).toLocaleString()}
                </span>
                {dateIsCompleted && isCompleted && (
                    <span className={cn(style.dateIsCompleted)}>
                        Завершено:
                        <br />
                        {new Date(dateIsCompleted).toLocaleString()}
                    </span>
                )}
            </div>
        </article>
    )
}

export default Todo
