import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ todoCardlist, deleteTodo, completeTodo }) => (
  <section id="todos">
    <ul id="todoList">
      {todoCardlist &&
        todoCardlist.map((card) => (
          <TodoCard
            id={card.id}
            title={card.title}
            description={card.description}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
    </ul>
  </section>
);

export default TodoCardList;
