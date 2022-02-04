import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchUsers } from "../../store/action-creators/user";
import { useDispatch } from "react-redux";
import stylesPreloader from "../Preloader/Preloader.module.css";
import styles from "./UserList.module.css";
const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return (
      <div className={stylesPreloader.preloader}>
        <div className={stylesPreloader.preloader__container}>
          <span className={stylesPreloader.preloader__round}></span>
        </div>
      </div>
    );
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <section className={styles.table}>
      <table>
        <thead>
          <tr className={styles.headers}>
            <th className={styles.name}>name</th>
            <th className={styles.email}>email</th>
            <th className={styles.phone}>phone</th>
            <th className={styles.website}>website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default UserList;
