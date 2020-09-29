import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ todos }) => {
  // if (newTodo != null) todos.push(newTodo);

  if (todos.length === 0) return <p>Jippi, ingen todos</p>;

  return (
    <section id="todos">
      <ul id="todoList">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoCardList;
