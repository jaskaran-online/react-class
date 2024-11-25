/*
  Practice Exercise: Todo List with useReducer
  
  Learning Objectives:
  1. Understand how to use useReducer hook for complex state management
  2. Implement CRUD operations using reducer pattern
  3. Practice handling form submissions in React
  4. Learn to manage state transitions with action types
  5. Work with array manipulations in reducers
  
  Tasks:
  1. Review the reducer implementation and understand the state flow
  2. Add more features like:
     - Edit todo functionality
     - Mark all todos complete/incomplete
     - Clear completed todos
     - Add priority levels to todos
  3. Try implementing local storage to persist todos
  4. Add filtering capabilities (All, Active, Completed)
*/

import React, { useReducer } from 'react';

// Action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        id: Date.now(),
        text: action.payload,
        completed: false
      }];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = React.useState('');
  const [editingId, setEditingId] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      if (editingId) {
        dispatch({ type: UPDATE_TODO, payload: { id: editingId, text: input } });
        setEditingId(null);
      } else {
        dispatch({ type: ADD_TODO, payload: input });
      }
      setInput('');
    }
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setInput(todo.text);
  };

  return (
    <div>
      <h1>Todo List with useReducer</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">
          {editingId ? 'Update Todo' : 'Add Todo'}
        </button>
        {editingId && (
          <button type="button" onClick={() => {
            setEditingId(null);
            setInput('');
          }}>
            Cancel
          </button>
        )}
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginRight: '10px'
              }}
              onClick={() => dispatch({ type: TOGGLE_TODO, payload: todo.id })}
            >
              {todo.text}
            </span>
            <button
              onClick={() => startEditing(todo)}
              style={{ marginRight: '5px' }}
            >
              Edit
            </button>
            <button
              onClick={() => dispatch({ type: DELETE_TODO, payload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
