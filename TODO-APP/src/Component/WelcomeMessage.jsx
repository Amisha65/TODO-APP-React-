import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemContext } from "../Store/todo-item-store";

const WelcomeMassage = () => {
  const { todoItem } = useContext(TodoItemContext);

  return (
    todoItem.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
  );
};

export default WelcomeMassage;
