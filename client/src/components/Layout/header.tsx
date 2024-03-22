import cn from 'classnames'
import style from './../../sass/header.module.sass'
import logo from './../../images/logo192.png'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import { NavLink } from 'react-router-dom'
import { exitAC } from '../../redux/actions/user-actions'
import { AppDispatch } from '../../types'
import { useDispatch } from 'react-redux'

type PropsType = {
    userId: string
}

const Header: React.FC<PropsType> = ({ userId }): JSX.Element => {
    const dispatch: AppDispatch = useDispatch()

    const handleExit = () => {
        dispatch(exitAC())
        localStorage.removeItem('TOKEN')
    }

    const items: MenuProps['items'] = [
        {
            key: 'profile',
            label: (
                <NavLink
                    style={{ textAlign: 'center' }}
                    to={`/profile/${userId}`}
                >
                    Профиль
                </NavLink>
            ),
        },
        {
            key: 'tasks',
            label: (
                <NavLink style={{ textAlign: 'center' }} to={`/user/${userId}`}>
                    Задачи
                </NavLink>
            ),
        },
        {
            key: 'users',
            label: (
                <NavLink style={{ textAlign: 'center' }} to={`/users`}>
                    Пользователи
                </NavLink>
            ),
        },
        {
            key: 'exit',
            label: <span style={{ textAlign: 'center' }}>Выйти</span>,
            danger: true,
            onClick: handleExit,
        },
    ]

    return (
        <header data-testid="header" className={cn(style.header)}>
            <div className="container" data-testid="container">
                <div data-testid="logoWrapper" className={cn(style.logo)}>
                    <Dropdown menu={{ items }}>
                        <a data-testid="logo" href="#">
                            <img width="70px" src={logo} alt="logo" />
                        </a>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

export default Header
