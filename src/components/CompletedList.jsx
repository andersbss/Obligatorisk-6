import React from 'react';
import Title from './Title';
import CompletedListItem from './CompletedListItem';

const CompletedList = ({ completedTodoCardList }) => (
  <section id="completedTodos">
    <Title title="Completed todos" />
    <form id="filterCheckbox">
      <input type="checkbox" />
      <label>Filter by date</label>
    </form>
    <table id="completedTodosTable">
      <thead>
        <tr id="headers">
          <th id="titleHeader">Title</th>
          <th id="authorHeader">Author</th>
          <th id="descHeader">Description</th>
          <th id="dateHeader">Completed date</th>
        </tr>
      </thead>
      <tbody>
        {completedTodoCardList &&
          completedTodoCardList.map((card) => (
            <CompletedListItem
              title={card.title}
              author={card.author}
              description={card.description}
            />
          ))}
      </tbody>
    </table>
  </section>
);

export default CompletedList;
