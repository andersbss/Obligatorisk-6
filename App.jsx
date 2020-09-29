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
  const [todoList, setTodoList] = useState([]);

  const toggleModal = () =>
    setState((param) => (param === 'active' ? '' : 'active'));

  const addNewTodo = (newTodo) => {
    newTodo.id = todoList.length + 1;
    setTodoList((oldTodos) => [...oldTodos, newTodo]);
  };

  return (
    <>
      <Navbar header1="HIOF" header2="User user" />
      <main>
        <TodoButton toggleModal={toggleModal} />
        <TodoCardList todoCardlist={todoList} />
        <CompletedList />
      </main>
      <Modal
        visibility={modalVisibility}
        toggleModal={toggleModal}
        addNewTodo={addNewTodo}
      />
    </>
  );
};

export default App;
