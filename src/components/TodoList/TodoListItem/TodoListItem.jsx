import React from "react";
import './TodoListItem.css'

const TodoListItem = ({title, deleteItem}) => {
  return <article className="listItemContainer">
    <h2>{title}</h2>
    <button onClick={deleteItem} className="normal-button">Delete</button>
  </article>;
};

export default TodoListItem;
