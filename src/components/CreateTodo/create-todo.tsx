import { useState } from 'react';
import cn from 'classnames'
import style from './../../sass/createTodo.module.sass'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types';
import { postTodosAC, postTodosApiAC } from '../../redux/actions/todo-actions';

type PropsType = {}

const CreateTodo: React.FC<PropsType> = (): JSX.Element => {

    const [currentTarget, changeCurrentTarget] = useState("")
    const dispatch: AppDispatch = useDispatch()

    const postTargetHandler = (): void => {
        dispatch(postTodosAC(currentTarget))
        dispatch(postTodosApiAC())
        changeCurrentTarget('')
    }

    return  (
        <div className={cn(style.createTodo)}>
            <input type="text" value={currentTarget} onChange={(el) => { changeCurrentTarget(el.currentTarget.value) }} />
            <button onClick={postTargetHandler}>Создать</button>
        </div>
    )
}

export default CreateTodo