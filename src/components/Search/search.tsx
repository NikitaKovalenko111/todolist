import { Input } from 'antd'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import style from './../../sass/search.module.sass'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { todoQuerySelector } from '../../selectors/todo-selectors'
import { AppDispatch } from '../../types'
import { useDispatch } from 'react-redux'
import { changeQueryAC, getTodosAC } from '../../redux/actions/todo-actions'

type PropsType = {}

const Search: React.FC<PropsType> = (): JSX.Element => {

    const [target, changeTarget] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    const query = useSelector(todoQuerySelector)
    const dispatch: AppDispatch = useDispatch()

    const onSearch = () => {
        dispatch(getTodosAC())
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeTarget(e.currentTarget.value)
    }

    useEffect(() => {
        if (searchParams.has('target'))
            changeTarget(String(searchParams.get('target')))
    }, [])

    useEffect(() => {
        dispatch(changeQueryAC(target))
    }, [target])

    useEffect(() => {
        setSearchParams(query)
    }, [query])

    return (
        <>
            <Input.Search placeholder="Цель" allowClear enterButton="Search" onChange={handleChange} onSearch={onSearch} value={target} style={{ width: '550px' }} />
        </>
    )
}

export default Search