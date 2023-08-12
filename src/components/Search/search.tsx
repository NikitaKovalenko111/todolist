import { Input } from 'antd'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import style from './../../sass/search.module.sass'
import { useSearchParams } from 'react-router-dom'
import { AppDispatch } from '../../types'
import { useDispatch } from 'react-redux'
import { getTodosAC } from '../../redux/actions/todo-actions'

type PropsType = {}

const Search: React.FC<PropsType> = (): JSX.Element => {

    const [target, changeTarget] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    const dispatch: AppDispatch = useDispatch()

    const onSearch = () => {
        dispatch(getTodosAC(target))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeTarget(e.currentTarget.value)
    }

    useEffect(() => {
        if (searchParams.has('target'))
            changeTarget(String(searchParams.get('target')))
    }, [])

    useEffect(() => {
        setSearchParams({ target: target })
    }, [target])

    return (
        <>
            <Input.Search data-testid="search/input" placeholder="Цель" allowClear enterButton="Search" onChange={handleChange} onSearch={onSearch} value={target} style={{ width: '550px' }} />
        </>
    )
}

export default Search