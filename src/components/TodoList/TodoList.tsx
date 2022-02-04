import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import styles from "./TodoList.module.css";
import stylesPreloader from "../Preloader/Preloader.module.css";

const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

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
    <section className={styles.tasks}>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div className={styles.pages}>
        {pages.map((i) => (
          <div
            key={i}
            onClick={() => setTodoPage(i)}
            className={i === page ? styles.active : styles.inactive}
          >
            {i}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodoList;
