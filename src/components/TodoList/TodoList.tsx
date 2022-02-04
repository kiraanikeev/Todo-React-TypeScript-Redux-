import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import styles from "./TodoList.module.css";
import stylesPreloader from "../Preloader/Preloader.module.css";

const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

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
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div style={{display: "flex"}}>
                {pages.map(p =>
                    <div key={p}
                        onClick={() => setTodoPage(p)}
                        style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;