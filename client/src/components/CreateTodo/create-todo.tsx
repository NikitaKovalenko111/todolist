import { useState } from 'react';
import cn from 'classnames'
import style from './../../sass/createTodo.module.sass'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types';
import { postTodosAC } from '../../redux/actions/todo-actions';

type PropsType = {
    authorId: string
}

const CreateTodo: React.FC<PropsType> = ({ authorId }): JSX.Element => {

    const [currentTarget, changeCurrentTarget] = useState("")
    const dispatch: AppDispatch = useDispatch()

    const postTargetHandler = (): void => {
        dispatch(postTodosAC(currentTarget, false, authorId))
        changeCurrentTarget('')
    }

    return  (
        <div className={cn(style.createTodo)} data-testid="create-todo/wrapper">
            <input type="text" data-testid="create-todo/input" value={currentTarget} onChange={(el) => { changeCurrentTarget(el.currentTarget.value) }} />
            <button data-testid="create-todo/button" onClick={postTargetHandler}>Создать</button>
        </div>
    )
}

export default CreateTodo