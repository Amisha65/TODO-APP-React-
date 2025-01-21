import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemContext = createContext({
  todoItem: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currentTodoItem, action) => {
  let newTodoItemss = currentTodoItem;

  if (action.type === "NEW_TYPE") {
    newTodoItemss = [
      ...currentTodoItem,
      {
        name: action.payload.itemName,
        date: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItemss = currentTodoItem.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return newTodoItemss;
};

const TodoItemsContexProvider = ({ children }) => {
  const [todoItem, dispatchTodoItem] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_TYPE",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  const deleteItem = (todoitemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoitemName,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };

  return (
    <TodoItemContext.Provider
      value={{
        todoItem,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemsContexProvider;
