import React, { useState } from 'react';
import Navbar from './src/components/Navbar';
import TodoButton from './src/components/TodoButton';
import TodoCardList from './src/components/TodoCardList';
import CompletedList from './src/components/CompletedList';
import Modal from './src/components/Modal';

let todoId = 0;

const App = () => {
  const [modalVisibility, setState] = useState('');
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  const generateId = () => (todoId += 1);

  const toggleModal = () => setState((param) => (param === 'active' ? '' : 'active'));

  const newTodo = (todo) => {
    todo.id = generateId();
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (e) => {
    const todoId = parseInt(e.target.parentNode.parentNode.id);
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const completeTodo = (e) => {
    const todoId = parseInt(e.target.parentNode.parentNode.id);
    setCompletedTodos((prev) => [...prev, ...todos.filter((todo) => todo.id === todoId)]);
    deleteTodo(e);
  };

  const handleSearch = (e) => {
    setSearchParam(e.target.value);
    const searchedTodos = completedTodos.filter((todo) => todo.title === searchParam);
    console.log(searchedTodos);

    console.log(searchParam);
  };

  return (
    <>
      <Navbar header1="HIOF" header2="User user" />
      <main>
        <TodoButton toggleModal={toggleModal} />
        <TodoCardList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        <CompletedList
          completedTodos={completedTodos}
          handleSearch={handleSearch}
          search={searchParam}
        />
      </main>
      <Modal visibility={modalVisibility} toggleModal={toggleModal} newTodo={newTodo} />
    </>
  );
};

export default App;
