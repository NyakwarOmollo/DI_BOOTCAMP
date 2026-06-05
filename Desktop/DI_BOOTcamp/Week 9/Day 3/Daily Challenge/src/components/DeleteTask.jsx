import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasksSlice.js';

function DeleteTask({ taskId, day }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="delete-button"
      onClick={() => dispatch(deleteTask({ day, id: taskId }))}
    >
      Delete
    </button>
  );
}

export default DeleteTask;
