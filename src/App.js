import React from 'react';
import TodoContainer from './TodoContainer';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => (
  <TodoContainer.Provider>
    <TodoInput/>
    <TodoList/>
  </TodoContainer.Provider>
)

export default App;
