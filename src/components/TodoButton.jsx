import React from 'react';

const TodoButton = ({ toggleModal }) => (
  <button type="button" id="addTodoBtn" onClick={toggleModal}>
    <span className="plus" />
    <span className="todoTxt">Todo</span>
  </button>
);

export default TodoButton;
