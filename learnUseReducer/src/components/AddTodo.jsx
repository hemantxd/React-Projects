import React, { useContext } from "react";
import { useRef } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTODO() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTODO;
