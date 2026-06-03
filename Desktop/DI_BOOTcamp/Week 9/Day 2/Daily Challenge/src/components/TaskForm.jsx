import React, { useState } from 'react';

function TaskForm({ selectedDay, addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const submitTask = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      setError('Task title is required.');
      return;
    }

    addTask(selectedDay, {
      id: `${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <div className="card task-form-card">
      <h2>Add a Task</h2>
      <form onSubmit={submitTask}>
        <div className="form-group">
          <label htmlFor="task-title">Title</label>
          <input
            id="task-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="What do you want to do?"
          />
        </div>
        <div className="form-group">
          <label htmlFor="task-description">Description</label>
          <textarea
            id="task-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Optional details"
            rows="3"
          />
        </div>
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="button button-primary">
          Add Task for {selectedDay}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
