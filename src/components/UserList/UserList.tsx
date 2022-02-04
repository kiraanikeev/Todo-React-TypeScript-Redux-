import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchUsers} from "../../store/action-creators/user";
import {useDispatch} from "react-redux"
import stylesPreloader from "../Preloader/Preloader.module.css";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return  <div className={stylesPreloader.preloader}>
        <div className={stylesPreloader.preloader__container}>
          <span className={stylesPreloader.preloader__round}></span>
        </div>
        </div>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;