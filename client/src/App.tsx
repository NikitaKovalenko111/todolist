import { useEffect } from 'react'
import './App.css'
import Header from './components/Layout/header'
import AuthorizationPage from './pages/authorizationPage'
import RegistrationPage from './pages/registrationPage'
import UserPage from './pages/userPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppDispatch, userType } from './types'
import { useDispatch } from 'react-redux'
import { authorizationByTokenAC } from './redux/actions/user-actions'
import { useSelector } from 'react-redux'
import { authorizedUserSelector } from './selectors/user-selectors'
import UsersPage from './pages/usersPage'

function App() {
    const dispatch: AppDispatch = useDispatch()

    const authorizedUser: userType = useSelector(authorizedUserSelector)

    useEffect(() => {
        if (localStorage.getItem('TOKEN') && !authorizedUser) {
            dispatch(
                authorizationByTokenAC(localStorage.getItem('TOKEN') as string)
            )
        }
    }, [])

    return (
        <BrowserRouter basename="/">
            <div className="App" data-testid="app">
                <Header userId={authorizedUser._id} />
                <Routes>
                    <Route path="users" element={<UsersPage />} />
                    <Route path="user/:id" element={<UserPage />} />
                    <Route
                        path="auth/registration"
                        element={<RegistrationPage />}
                    />
                    <Route
                        path="auth/authorization"
                        element={<AuthorizationPage />}
                    />
                    <Route path="/" element={<Navigate to="user/:id" />} />
                    <Route path="*" element={<span>404</span>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
