import React, { useState } from 'react';
import Modal from './Modal';

const TodoButton = (prop) => {
  const handleClick = () => {
    console.log(prop);

    // document.getElementById('popup').classList.toggle('active');

    
  };

  return (
    <button type="button" id="addTodoBtn" onClick={handleClick}>
      <span className="plus" />
      <span className="todoTxt">Todo</span>
    </button>
  );
};

export default TodoButton;
