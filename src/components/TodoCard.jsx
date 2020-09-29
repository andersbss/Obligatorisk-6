import React from 'react';

const TodoCard = ({ title, description, id, deleteTodo }) => (
  <li className="todoItem" id={id}>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="todoBtn">
      <button type="button" className="deleteBtn" onClick={deleteTodo}>
        Delete
      </button>
      <button type="button" className="completeBtn">
        Complete
      </button>
    </div>
  </li>
);

export default TodoCard;
