import React from 'react';
import Navbar from './src/components/Navbar';
import TodoButton from './src/components/TodoButton';
import Title from './src/components/Title';

const App = () => (
  <>
    <Navbar header1="HIOF" header2="User user" />
    <main>
      <TodoButton />
    </main>
    <aside className="popup" id="popup" />
  </>
);

export default App;
