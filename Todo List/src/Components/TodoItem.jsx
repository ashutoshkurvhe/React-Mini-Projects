import { MdDeleteOutline } from "react-icons/md";
import React from "react";

const TodoItem = ({ todoItems, deleteItem }) => {
  return (
    <>
      {todoItems.map((todoItem) => (
        <div key={todoItem.id} className="item-container">
          <p>{todoItem.item}</p>
          <p>{todoItem.date}</p>
          <button
            className="delete-btn"
            onClick={() => deleteItem(todoItem.id)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
