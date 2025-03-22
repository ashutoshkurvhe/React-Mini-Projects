import React, { useState } from "react";
import TodoItems from "./TodoItems";

const TodoInputs = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item && date) { 
      let newItem = {
        id: todoItems.length + 1,
        item: item,
        date: date,
      }
      setTodoItems([...todoItems, newItem]);
      setItem('');
      setDate('');
    }
  };
  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add</button>
        </form>
        <TodoItems todoItems={todoItems} setTodoItems={setTodoItems}></TodoItems>          
    </div>
  );
};

export default TodoInputs;
