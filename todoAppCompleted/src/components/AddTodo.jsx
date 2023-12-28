import React from "react";
import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

function AddTODO({ onNewItem }) {
  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            
            onSubmit={handleAddButtonClick}
            className="btn btn-success kg-button"
            onClick={handleAddButtonClick}
          >
            <MdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTODO;
