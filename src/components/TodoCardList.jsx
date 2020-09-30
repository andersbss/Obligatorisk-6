import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ todos, deleteTodo, completeTodo }) => {
  if (todos.length === 0) {
    return (
      <section id="todos">
        <ul id="todoList">
          <p>Jippi! Ingen todos i dag</p>
        </ul>
      </section>
    );
  }

  return (
    <section id="todos">
      <ul id="todoList">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            title={todo.title}
            description={todo.description}
            id={todo.id}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoCardList;
