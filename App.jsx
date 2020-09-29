import React from 'react';
import Navbar from './src/components/Navbar';
import TodoButton from './src/components/TodoButton';
import TodoCardList from './src/components/TodoCardList';
import CompletedList from './src/components/CompletedList';
import TodoCard from './src/components/TodoCard';
import CompletedListItem from './src/components/CompletedListItem';
import Modal from './src/components/Modal';

const App = () => {
  const todoList = [
    {
      title: 'yo',
      description: 'hh',
      id: '1',
    },
    {
      title: 'ja',
      description: 'hei anders',
      id: '2',
    },
  ];
  return (
    <>
      <Navbar header1="HIOF" header2="User user" />
      <main>
        <TodoButton />
        <TodoCardList todoCardlist={todoList} />
        <CompletedList />
      </main>
    </>
  );
};

export default App;
