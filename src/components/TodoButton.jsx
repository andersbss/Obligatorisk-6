import React from 'react';

const TodoButton = () => {
  const handleClick = () => {
    document.getElementById('popup').classList.toggle('active');
  };

  return (
    <button type="button" id="addTodoBtn" onClick={handleClick}>
      <span className="plus" />
      <span className="todoTxt">Todo</span>
    </button>
  );
};

export default TodoButton;
