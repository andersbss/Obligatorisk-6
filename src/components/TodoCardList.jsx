import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ todos, deleteTodo, completeTodo }) => (
  <section id="todos">
    <ul id="todoList">
      {todos.length <= 0 ? (
        <p className="message">Jippi! Ingen todos i dag</p>
      ) : (
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            title={todo.title}
            description={todo.description}
            id={todo.id}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))
      )}
    </ul>
  </section>
);

export default TodoCardList;
