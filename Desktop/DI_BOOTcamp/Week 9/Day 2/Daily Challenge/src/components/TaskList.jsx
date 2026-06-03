import React, { useState } from 'react';

function TaskList({ selectedDay, tasks, editTask, deleteTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [error, setError] = useState('');

  const beginEditing = (task) => {
    setEditingTaskId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description || '');
    setError('');
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditTitle('');
    setEditDescription('');
    setError('');
  };

  const saveTask = (event, taskId) => {
    event.preventDefault();
    if (!editTitle.trim()) {
      setError('Task title cannot be empty.');
      return;
    }

    editTask(selectedDay, taskId, {
      title: editTitle.trim(),
      description: editDescription.trim(),
    });
    cancelEdit();
  };

  return (
    <div className="card task-list-card">
      <h2>Tasks for {selectedDay}</h2>
      {tasks.length === 0 ? (
        <p className="empty-state">No tasks for this day yet.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              {editingTaskId === task.id ? (
                <form onSubmit={(event) => saveTask(event, task.id)}>
                  <div className="form-group">
                    <input
                      value={editTitle}
                      onChange={(event) => setEditTitle(event.target.value)}
                      className="edit-input"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      value={editDescription}
                      onChange={(event) => setEditDescription(event.target.value)}
                      rows="2"
                      className="edit-textarea"
                    />
                  </div>
                  {error && <p className="error-text">{error}</p>}
                  <div className="task-actions">
                    <button type="submit" className="button button-primary small">
                      Save
                    </button>
                    <button type="button" className="button small" onClick={cancelEdit}>
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div>
                    <h3>{task.title}</h3>
                    {task.description && <p>{task.description}</p>}
                  </div>
                  <div className="task-actions">
                    <button className="button small" onClick={() => beginEditing(task)}>
                      Edit
                    </button>
                    <button className="button button-danger small" onClick={() => deleteTask(selectedDay, task.id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
