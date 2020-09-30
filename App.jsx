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
  const [completedTodoList, setCompletedTodoList] = useState([]);

  const toggleModal = () =>
    setState((param) => (param === 'active' ? '' : 'active'));

  const addNewTodo = (newTodo) => {
    newTodo.id = todoList.length + 1;
    setTodoList((oldTodos) => [...oldTodos, newTodo]);
    console.log(newTodo);
  };

  const deleteTodo = (e) => {
    const id = parseInt(e.target.parentNode.parentNode.id);
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const completeTodo = (e) => {
    const id = parseInt(e.target.parentNode.parentNode.id);
    const completedTodo = todoList.filter((todo) => todo.id === id);
    setCompletedTodoList((oldTodos) => [...oldTodos, ...completedTodo]);
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Navbar header1="HIOF" header2="User user" />
      <main>
        <TodoButton toggleModal={toggleModal} />
        <TodoCardList
          todoCardlist={todoList}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
        <CompletedList completedTodoCardList={completedTodoList} />
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
