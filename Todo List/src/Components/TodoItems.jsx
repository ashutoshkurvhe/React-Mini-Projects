import TodoItem from "./TodoItem";
import React from "react";

const TodoItems = ({ todoItems, setTodoItems }) => {
  const deleteItem = (id) => {
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id));
  };

  return <TodoItem deleteItem={deleteItem} todoItems={todoItems} />;
};

export default TodoItems;
