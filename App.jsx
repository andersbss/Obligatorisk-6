import React, { useState, useEffect } from 'react';
import Navbar from './src/components/Navbar';
import TodoButton from './src/components/TodoButton';
import TodoCardList from './src/components/TodoCardList';
import CompletedList from './src/components/CompletedList';
import Modal from './src/components/Modal';

let todoId = 0;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [searchTodos, setSearchTodos] = useState([]);
  const [modalVisibility, setState] = useState('');
  const [searchParam, setSearchParam] = useState('');

  const generateId = () => (todoId += 1);

  const toggleModal = () => setState((param) => (param === 'active' ? '' : 'active'));

  const handleCompletedList = () => (searchParam.length <= 0 ? completedTodos : searchTodos);

  const handleSearch = (e) => setSearchParam(e.target.value);

  const getTodoId = (e) => parseInt(e.target.parentNode.parentNode.id);

  const deleteTodo = (e) => setTodos(todos.filter((todo) => todo.id !== getTodoId(e)));

  const newTodo = (todo) => {
    todo.id = generateId();
    setTodos((prev) => [...prev, todo]);
  };

  const completeTodo = (e) => {
    const id = getTodoId(e);
    setCompletedTodos((prev) => [...prev, ...todos.filter((todo) => todo.id === id)]);
    deleteTodo(e);
  };

  useEffect(() => {
    setSearchTodos(
      completedTodos.filter((todo) =>
        todo.title.toString().toLowerCase().includes(searchParam.toLowerCase())
      )
    );
  }, [completedTodos, searchParam]);

  return (
    <>
      <Navbar header1="HIOF" header2="User user" />
      <main>
        <TodoButton toggleModal={toggleModal} />
        <TodoCardList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        <CompletedList
          completedTodos={handleCompletedList}
          handleSearch={handleSearch}
          search={searchParam}
        />
      </main>
      <Modal visibility={modalVisibility} toggleModal={toggleModal} newTodo={newTodo} />
    </>
  );
};

export default App;
