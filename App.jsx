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
  const [todos, setTodos] = useState([]);

  // eslint-disable-next-line prettier/prettier
  const toggleModal = () => setState((param) => (param === 'active' ? '' : 'active'));

  const newTodo = (todo) => {
    setTodos((oldTodos) => [...oldTodos, todo]);
    todo.id = todos.length + 1;
  };

  return (
    <>
      <Navbar header1="HIOF" header2="User user" />
      <main>
        <TodoButton toggleModal={toggleModal} />
        <TodoCardList todos={todos} />
        <CompletedList />
      </main>
      <Modal
        visibility={modalVisibility}
        toggleModal={toggleModal}
        newTodo={newTodo}
      />
    </>
  );
};

export default App;
