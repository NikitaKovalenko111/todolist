import { AppDispatch, userType } from "../types"
import { useSelector } from "react-redux"
import { isLoadingSelector, usersSelector } from "../selectors/user-selectors"
import UsersList from "../components/usersList/usersList"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeIsLoading, getUsersAC } from "../redux/actions/user-actions"
import cn from 'classnames'
import styles from './../sass/usersPage.module.sass'
import { Spin } from "antd"

type PropsType = {}

const UsersPage: React.FC<PropsType> = (): JSX.Element => {

    const dispatch: AppDispatch = useDispatch()

    const isLoading: boolean = useSelector(isLoadingSelector)

    useEffect(() => {
        dispatch(getUsersAC())
    }, [])

    const users: Array<userType> = useSelector(usersSelector)

    return (
        <div className={ cn(styles.container, 'container') }>
            <div className={ cn(styles.list, 'list') }>
                <UsersList isLoading={ isLoading } users={ users } />
            </div>
        </div>
    )
}

export default UsersPage