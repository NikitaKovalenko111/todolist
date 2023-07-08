import cn from 'classnames'
import style from './../../sass/todo.module.sass'
import { useState, useEffect } from 'react'
import { AppDispatch } from '../../types'
import { useDispatch } from 'react-redux'
import { changeDeleteIdAC, changeDeleteIdApiAC, putTodoAC, putTodoApiAC } from '../../redux/actions/todo-actions'

type PropsType = {
    target: string
    id: number
    date: string
    dateIsCompleted?: string
    isCompleted: boolean
}

const Todo: React.FC<PropsType> = ({ target, id, date, dateIsCompleted, isCompleted }): JSX.Element => {

    const [currentIsCompleted, changeCurrentIsCompleted] = useState(isCompleted)
    const dispatch: AppDispatch = useDispatch()

    const changeIsCompletedHandler = (): void => {
        changeCurrentIsCompleted(current => !current)
        dispatch(putTodoAC(!currentIsCompleted, id))
        dispatch(putTodoApiAC())
    }

    const deleteHandler = (): void => {
        dispatch(changeDeleteIdAC(id))
        dispatch(changeDeleteIdApiAC())
    }

    return (
        <article key={ id } className={cn(style.todoItem, { [style.todoItem_green]: currentIsCompleted })}>
            <div onClick={deleteHandler} className={cn(style.delete)}>
                &#9587;
            </div>
            <div className={cn(style.block)}>
                <span className={cn(style.target)}>{ target }</span>
                <div className={cn(style.form_checkbox)}>
                    <input type="checkbox" name="isCompleted" id={`isCompleted` + id} onClick={ changeIsCompletedHandler } className={cn(style.checkbox)} checked={currentIsCompleted} />
                    <label htmlFor={"isCompleted" + id}></label>
                </div>
            </div>
            <div className={cn(style.subblock)}>
                <span className={cn(style.date)}>Создано:<br /> { date }</span>
                { dateIsCompleted && <span className={cn(style.dateIsCompleted)}>Завершено:<br />{ dateIsCompleted }</span> }
            </div>
        </article>
    )
}

export default Todo