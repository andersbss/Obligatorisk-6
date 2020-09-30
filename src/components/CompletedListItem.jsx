import React from 'react';

const CompletedListItem = ({ title, author, description }) => {
  const dateZeroHandler = (num) => (num < 10 ? `0${num}` : num);

  const formatYear = (year) => {
    const splitYear = year.toString().split('');
    return `${splitYear[2]}${splitYear[3]}`;
  };

  const getDate = () => {
    const date = new Date();
    const day = dateZeroHandler(date.getDate());
    const month = dateZeroHandler(date.getMonth() + 1);
    const year = formatYear(date.getFullYear());
    return `${day}.${month}.${year}`;
  };

  return (
    <tr className="completedTodo">
      <td>{title}</td>
      <td>{author}</td>
      <td>{description}</td>
      <td>{getDate()}</td>
    </tr>
  );
};

export default CompletedListItem;
