import React, { useState } from 'react';
import Modal from './Modal';

const TodoButton = ({ handleModal }) => (
  <button type="button" id="addTodoBtn" onClick={handleModal}>
    <span className="plus" />
    <span className="todoTxt">Todo</span>
  </button>
);

export default TodoButton;
