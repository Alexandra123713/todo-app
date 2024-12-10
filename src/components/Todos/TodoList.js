import { Todo } from "./Todo";
import styles from "./TodoList.module.css";

export const TodoList = ({ todos, deleteTodo, toogleTodo }) => {
  return (
    <div className={styles.listContainer}>
      {!todos.length && (
        <h2 className={styles.emptyList}>Todo list is empty</h2>
      )}

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toogleTodo={toogleTodo}
        />
      ))}
    </div>
  );
};
