import React from 'react';
import Navbar from './src/components/Navbar';
import TodoButton from './src/components/TodoButton';
import TodoCardList from './src/components/TodoCardList';
import TodoCard from './src/components/TodoCard';

const App = () => (
  <>
    <Navbar header1="HIOF" header2="User user" />
    <main>
      <TodoButton />
      <TodoCardList />
    </main>
    <aside className="popup" id="popup" />
  </>
);

export default App;
