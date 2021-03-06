import React from 'react';
import Title from './Title';
import CompletedListItem from './CompletedListItem';

const CompletedList = ({ completedTodos, handleSearch, search }) => (
  <section id="completedTodos">
    <Title title="Completed todos" />
    <form id="filterCheckbox">
      <input type="checkbox" />
      <label>Filter by date</label>
    </form>
    <form id="search">
      <input
        className="searchField"
        type="text"
        id="search"
        placeholder="Search"
        onChange={handleSearch}
        value={search}
      />
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
        {completedTodos().map((todo) => (
          <CompletedListItem
            key={todo.id}
            title={todo.title}
            author={todo.author}
            description={todo.description}
          />
        ))}
      </tbody>
    </table>
  </section>
);
export default CompletedList;
