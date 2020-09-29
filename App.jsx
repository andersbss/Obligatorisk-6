import React, { useState } from 'react';
import Navbar from './src/components/Navbar';
import TodoButton from './src/components/TodoButton';
import TodoCardList from './src/components/TodoCardList';
import CompletedList from './src/components/CompletedList';
import TodoCard from './src/components/TodoCard';
import CompletedListItem from './src/components/CompletedListItem';
import Modal from './src/components/Modal';

const App = () => {
  const [modalVisibility, setState] = useState('');

  const toggleModal = () =>
    setState((param) => (param === 'active' ? '' : 'active'));

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
        <TodoButton toggleModal={toggleModal} />
        <TodoCardList todoCardlist={todoList} />
        <CompletedList />
      </main>
      <Modal visibility={modalVisibility} toggleModal={toggleModal} />
    </>
  );
};

export default App;
