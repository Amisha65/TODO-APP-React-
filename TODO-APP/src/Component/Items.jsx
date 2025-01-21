import { useContext } from "react";
import { TodoItemContext } from "../Store/todo-item-store";

import css from "./Items.module.css";
import TodoItem from "./TodoItem";

const Items = () => {
  const { todoItem } = useContext(TodoItemContext);

  return (
    <div className={css.itemContainer}>
      {todoItem.map((item) => (
        <TodoItem
          key={item.name}
          todoname={item.name}
          tododate={item.date}
        ></TodoItem>
      ))}
    </div>
  );
};

export default Items;
