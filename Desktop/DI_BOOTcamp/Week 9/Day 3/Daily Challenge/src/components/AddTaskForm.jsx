import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/tasksSlice.js';

function AddTaskForm() {
  const [text, setText] = useState('');
  const selectedDay = useSelector((state) => state.tasks.selectedDay);
  const dispatch = useDispatch();

  const handleAdd = (event) => {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    dispatch(addTask(selectedDay, trimmed));
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleAdd}>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Add a new task for the selected day"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
