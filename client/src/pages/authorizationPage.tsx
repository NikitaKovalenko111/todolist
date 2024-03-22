import { Formik } from "formik"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import cn from 'classnames'
import { authorizationAC } from "../redux/actions/user-actions";
import styles from './../sass/authorizationPage.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, userType } from "../types";
import { NavLink, Navigate } from "react-router-dom";
import { authorizedUserSelector } from "../selectors/user-selectors";

type PropsType = {}

const AuthorizationPage: React.FC<PropsType> = (): JSX.Element => {

    const dispatch: AppDispatch = useDispatch()

    const authorizedUser: userType | boolean = useSelector(authorizedUserSelector)

    if (authorizedUser) {
        return <Navigate to={`/user/${(authorizedUser as userType)._id}`} />
    }

    return (
        <div className={cn('container', styles.container)}>
            <h1>Авторизация</h1>

            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {         
                    dispatch(authorizationAC(values.username, values.password))
                    setSubmitting(false)
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
                        <Space direction='vertical' size="large" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', width: 500 }} >
                            <Input className={cn(styles.input)} onChange={handleChange} value={values.username} name="username" size="large" placeholder="Username" prefix={<UserOutlined />} />
                            <Input.Password
                                className={cn(styles.input)}
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                placeholder="Password"
                                prefix={<LockOutlined />}
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                            <Button className={cn(styles.input)} onClick={() => {handleSubmit()}} >Авторизоваться</Button>
                        </Space>
                    </form>
                )}
            </Formik>
            <NavLink className={cn(styles.link)} to="/auth/registration">Регистрация</NavLink>
        </div>
    )
}

export default AuthorizationPage