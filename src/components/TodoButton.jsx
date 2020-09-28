import React from 'react';

const TodoButton = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <button type="button" id="addTodoBtn" onClick={handleClick}>
      <span className="plus" />
      <span className="todoTxt">Todo</span>
    </button>
  );
};

export default TodoButton;
