import React, { useState } from 'react';
import Modal from './Modal';

const TodoButton = () => {
  const [showForm, setState] = useState(false);
  const handleClick = () => setState((s) => !s);

  return (
    <div>
      <button type="button" id="addTodoBtn" onClick={handleClick}>
        <span className="plus" />
        <span className="todoTxt">Todo</span>
      </button>
      {showForm && <Modal handler={handleClick} />}
    </div>
  );
};

export default TodoButton;
