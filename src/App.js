import React from 'react';
import { useState } from 'react';
import TodoList from './To-do-list';
import Header from './header';
import Hero from './To-Do-hero';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <div className="App">
      <Header />
      <Hero completed={completedTodos} total={todos.length} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
