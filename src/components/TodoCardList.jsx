import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ todoCardlist }) => (
  <section id="todos">
    <ul id="todoList">
      {todoCardlist &&
        todoCardlist.map((card) => (
          <TodoCard
            title={card.title}
            description={card.description}
            id={card.id}
          />
        ))}
    </ul>
  </section>
);

export default TodoCardList;
