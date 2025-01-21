import { MdAutoDelete } from "react-icons/md";
import { TodoItemContext } from "../Store/todo-item-store";
import { useContext } from "react";

function Appname({ todoname, tododate, onDeleteClick }) {
  const { deleteItem } = useContext(TodoItemContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-botton"
            onClick={() => deleteItem(todoname)}
          >
            <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appname;
