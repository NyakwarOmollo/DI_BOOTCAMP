import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/tasksSlice.js';

function EditTask({ task, day, onClose }) {
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch(editTask({ day, id: task.id, text: trimmed }));
    onClose();
  };

  return (
    <div className="edit-task">
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button type="button" onClick={handleSave}>
        Save
      </button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
}

export default EditTask;
