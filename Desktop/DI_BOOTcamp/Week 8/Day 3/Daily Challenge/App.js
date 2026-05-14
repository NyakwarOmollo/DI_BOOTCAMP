import React, { useReducer, useRef, useState } from 'react';
import './App.css';

// Reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];

    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );

    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);

    case 'EDIT_TASK':
      return state.map(task =>
        task.id === action.payload.id ? { ...task, text: action.payload.text } : task
      );

    case 'SET_FILTER':
      return { ...state, filter: action.payload }; // We'll store filter in state

    default:
      return state;
  }
};

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, { tasks: [], filter: 'all' });
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  
  const editInputRef = useRef(null);

  const taskList = Array.isArray(tasks) ? tasks : tasks.tasks || [];
  const currentFilter = tasks.filter || 'all';

  // Filtered tasks
  const filteredTasks = taskList.filter(task => {
    if (currentFilter === 'completed') return task.completed;
    if (currentFilter === 'active') return !task.completed;
    return true; // 'all'
  });

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      dispatch({ type: 'ADD_TASK', payload: newTask.trim() });
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
    setTimeout(() => editInputRef.current?.focus(), 10);
  };

  const saveEdit = () => {
    if (editText.trim() && editingId) {
      dispatch({
        type: 'EDIT_TASK',
        payload: { id: editingId, text: editText.trim() }
      });
    }
    setEditingId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Task Manager</h1>

        {/* Add New Task */}
        <form onSubmit={addTask} className="add-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit">Add Task</button>
        </form>

        {/* Filters */}
        <div className="filters">
          <button onClick={() => setFilter('all')} className={currentFilter === 'all' ? 'active' : ''}>
            All
          </button>
          <button onClick={() => setFilter('active')} className={currentFilter === 'active' ? 'active' : ''}>
            Active
          </button>
          <button onClick={() => setFilter('completed')} className={currentFilter === 'completed' ? 'active' : ''}>
            Completed
          </button>
        </div>

        {/* Task List */}
        <ul className="task-list">
          {filteredTasks.map(task => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              {editingId === task.id ? (
                <div className="edit-mode">
                  <input
                    ref={editInputRef}
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                  />
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </div>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span onClick={() => toggleTask(task.id)}>{task.text}</span>
                  
                  <div className="actions">
                    <button onClick={() => startEditing(task)} className="edit-btn">Edit</button>
                    <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        <p className="task-count">
          {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
}

export default App;