import Todos from '../components/Todos/todos';
import { Space } from 'antd'
import CreateTodo from '../components/CreateTodo/create-todo';
import Search from './../components/Search/search';
import { userType } from '../types';
import { useSelector } from 'react-redux';
import { authorizedUserSelector } from '../selectors/user-selectors';
import { Navigate, ParamKeyValuePair, useParams } from 'react-router-dom';

type PropsType = {}

const UserPage: React.FC<PropsType> = (): JSX.Element => {

    const authorizedUser: userType = useSelector(authorizedUserSelector)
    const { id } = useParams()

    if (!authorizedUser) {
        return <Navigate to='/auth/authorization' />
    }

    return (
        <Space direction='vertical' size="large" style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }} >
            <Search userId={ (id as string) } />
            <Todos userId={ (id as string) } />
            { authorizedUser._id == id &&
            <CreateTodo authorId={ authorizedUser._id } /> }
        </Space>
    );
  }
  
  export default UserPage;