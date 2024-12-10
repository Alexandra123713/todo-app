import { useState } from "react";
import "./styles.css";
import { TodoForm } from "./components/Todos/TodoForm";
import { TodoList } from "./components/Todos/TodoList";
import { TodosActions } from "./components/Todos/TodosActions";
import { v4 as uuidv4 } from "uuid";
import styles from "./components/Todos/TodoList.module.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toogleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />

      {todos.length > 0 && (
        <TodosActions
          completedTodoExist={!!completedTodoCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toogleTodo={toogleTodoHandler}
      />
      {completedTodoCount > 0 && (
        <h2
          className={styles.emptyList}
        >{`You have completed ${completedTodoCount} ${
          completedTodoCount > 1 ? "todos" : "todo"
        }`}</h2>
      )}
    </div>
  );
}
