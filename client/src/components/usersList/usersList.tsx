import { List } from "antd"
import { userType } from "../../types"
import { NavLink } from "react-router-dom"

type PropsType = {
    users: Array<userType>
    isLoading: boolean
}

const UsersList: React.FC<PropsType> = ({ users, isLoading }): JSX.Element => {

    return (
        <List loading={isLoading} bordered itemLayout="horizontal" dataSource={ users } renderItem={(user, index) => (
            <List.Item >
                <List.Item.Meta title={ <NavLink to={`/user/${user._id}`}>{user.username}</NavLink> } />
            </List.Item>
        )} />
    )
}

export default UsersList