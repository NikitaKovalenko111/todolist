import { useState } from 'react';
import cn from 'classnames'
import style from './../../sass/createTodo.module.sass'

type PropsType = {}

const CreateTodo: React.FC<PropsType> = (): JSX.Element => {

    const [currentTarget, changeCurrentTarget] = useState("")

    return  (
        <div className={cn(style.createTodo)}>
            <input type="text" value={currentTarget} onChange={(el) => { changeCurrentTarget(el.currentTarget.value) }} />
            <button>Создать</button>
        </div>
    )
}

export default CreateTodo