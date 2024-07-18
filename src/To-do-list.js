import React, { useState } from 'react';
import './To-do-list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoList({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState('');
  const [isEditing , setEditing] = useState(false);
  const [currentTodo , setCurrentTodo] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleEditTodo =(index) => {
    setCurrentTodo(index);
    setInputValue(todos[index].text);
    setEditing(true);
  };
  const handleUpdateTodo = () => {
    const newTodos = [...todos];
    newTodos[currentTodo].text = inputValue;
    setTodos(newTodos);
    setInputValue('');
    setEditing(false);
    setCurrentTodo(null);
  };

  return (
    <div className="todo-list">
      <h2>What task do you want to complete today?</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter a task"
      />
      <button onClick={isEditing ? handleUpdateTodo : addTodo}>
        {isEditing ? 'Update' : 'Add'}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(index)}>{todo.text}</span>
            <div className="actions">
              <FontAwesomeIcon icon={faEdit} onClick={() => handleEditTodo(index)} />
              <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(index)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
