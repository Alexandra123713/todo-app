import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import { Button } from "../UI/Button.js";
import styles from "./TodosActions.module.css";

export const TodosActions = ({
  resetTodos,
  deleteCompletedTodos,
  completedTodoExist,
}) => {
  return (
    <div className={styles.actionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodoExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};
