import { useRef } from "react";
import { MdAddCard } from "react-icons/md";
import css from "./AddTodo.module.css";
import { useContext } from "react";
import { TodoItemContext } from "../Store/todo-item-store";

function AppTodo() {
  const { addNewItem } = useContext(TodoItemContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDueDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";

    addNewItem(todoName, todoDueDate);
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-botton">
            <MdAddCard></MdAddCard>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppTodo;
