import React, { useState } from 'react';
import Modal from './Modal';

const TodoButton = ({ toggleModal }) => (
  <button type="button" id="addTodoBtn" onClick={toggleModal}>
    <span className="plus" />
    <span className="todoTxt">Todo</span>
  </button>
);

export default TodoButton;
