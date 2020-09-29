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

  const handleModal = () =>
    setState((param) => (param === 'active' ? '' : 'active'));

  return (
    <>
      <Navbar header1="HIOF" header2="User user" />
      <main>
        <TodoButton handleModal={handleModal} />
        <TodoCardList />
        <CompletedList />
      </main>
      <Modal visibility={modalVisibility} handleModal={handleModal} />
    </>
  );
};

export default App;
