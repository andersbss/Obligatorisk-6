import React from 'react';
import Title from './Title';

const CompletedList = () => (
  <section>
    <Title title="Completed todos" />
    <form id="filterCheckbox">
      <input type="checkbox" />
      <label>Filter by date</label>
    </form>
    <table id="completedTodosTable">
      <tr id="headers">
        <th id="titleHeader">Title</th>
        <th id="authorHeader">Author</th>
        <th id="descHeader">Description</th>
        <th id="dateHeader">Completed date</th>
      </tr>
    </table>
  </section>
);

export default CompletedList;
