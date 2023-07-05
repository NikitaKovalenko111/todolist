import cn from 'classnames'
import style from './../../sass/todo.module.sass'

type PropsType = {
    target: string
    id: number
    date: string
    dateIsCompleted?: string
    isCompleted: boolean
}

const Todo: React.FC<PropsType> = ({ target, id, date, dateIsCompleted, isCompleted }): JSX.Element => {
    return (
        <article key={ id } className={cn(style.todoItem)}>
            <div className={cn(style.block)}>
                <span className={cn(style.target)}>{ target }</span>
                <input type="checkbox" name="isCompleted" value={ String(isCompleted) } />
            </div>
            <div className={cn(style.subblock)}>
                <span className={cn(style.date)}>Создано: { date }</span>
                { dateIsCompleted && <span className={cn(style.dateIsCompleted)}>{ dateIsCompleted }</span> }
            </div>
        </article>
    )
}

export default Todo