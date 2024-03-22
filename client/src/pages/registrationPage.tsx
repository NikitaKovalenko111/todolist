import { Formik } from 'formik'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Input, Space, Button } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import cn from 'classnames'
import styles from './../sass/registrationPage.module.sass'
import { authorizationAC, registrationAC } from '../redux/actions/user-actions'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../types'
import { NavLink, NavigateFunction, useNavigate } from 'react-router-dom'

type PropsType = {}

const RegistrationPage: React.FC<PropsType> = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch()
    const navigate: NavigateFunction = useNavigate()

    return (
        <div className={cn('container', styles.container)}>
            <h1>Регистрация</h1>

            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={async (values, { setSubmitting }) => {
                    const registrated = await dispatch(
                        registrationAC(values.username, values.password)
                    )
                    setSubmitting(false)
                    if (registrated) {
                        const authorized = await dispatch(
                            authorizationAC(
                                registrated.payload.username,
                                registrated.payload.password
                            )
                        )
                        if (authorized) {
                            navigate('/')
                        }
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Space
                            direction="vertical"
                            size="large"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: 500,
                            }}
                        >
                            <Input
                                className={cn(styles.input)}
                                onChange={handleChange}
                                value={values.username}
                                name="username"
                                size="large"
                                placeholder="Username"
                                prefix={<UserOutlined />}
                            />
                            <Input.Password
                                className={cn(styles.input)}
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                prefix={<LockOutlined />}
                                placeholder="Password"
                                iconRender={(visible) =>
                                    visible ? (
                                        <EyeTwoTone />
                                    ) : (
                                        <EyeInvisibleOutlined />
                                    )
                                }
                            />
                            <Button
                                className={cn(styles.input)}
                                onClick={() => {
                                    handleSubmit()
                                }}
                            >
                                Зарегистрироваться
                            </Button>
                        </Space>
                    </form>
                )}
            </Formik>
            <NavLink className={cn(styles.link)} to="/auth/authorization">
                Авторизация
            </NavLink>
        </div>
    )
}

export default RegistrationPage
