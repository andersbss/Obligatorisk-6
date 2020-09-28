import React from 'react';

const CompletedListItem = ({ title, author, description, date }) => (
  <tr className="completedTodo">
    <td>{title}</td>
    <td>{author}</td>
    <td>{description}</td>
    <td>{date}</td>
  </tr>
);

export default CompletedListItem;
