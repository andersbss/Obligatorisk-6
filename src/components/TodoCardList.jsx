import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ newTodo }) => {
  console.log(newTodo);

  return (
    <section id="todos">
      <ul id="todoList" />
    </section>
  );
};

export default TodoCardList;
