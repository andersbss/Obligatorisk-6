import React from 'react';
import Navbar from './src/components/Navbar';
import TodoButton from './src/components/TodoButton';
import TodoCardList from './src/components/TodoCardList';
import CompletedList from './src/components/CompletedList';
import TodoCard from './src/components/TodoCard';
import CompletedListItem from './src/components/CompletedListItem';

const App = () => (
  <>
    <Navbar header1="HIOF" header2="User user" />
    <main>
      <TodoButton />
      <TodoCardList />
      <CompletedList />
    </main>
    <aside className="popup" id="popup" />
  </>
);

export default App;
