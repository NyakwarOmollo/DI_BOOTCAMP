import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/actions';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            padding: '12px',
            margin: '8px 0',
            background: '#f8f9fa',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{ cursor: 'pointer', flex: 1 }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}
          >
            Delete
          </button>
        </li>
      ))}
      {todos.length === 0 && <p>No todos yet. Add one above!</p>}
    </ul>
  );
};

export default TodoList;