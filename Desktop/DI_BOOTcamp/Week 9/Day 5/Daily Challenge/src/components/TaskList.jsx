import React, { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory, selectCategoryById } from '../selectors.js';
import { deleteTask, editTask, toggleTaskCompleted, updateTaskProgress } from '../features/tasksSlice.js';

export default function TaskList({ selectedCategoryId }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => selectTasksByCategory(state, selectedCategoryId));
  const selectedCategory = useSelector((state) => selectCategoryById(state, selectedCategoryId));

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteTask(id));
    },
    [dispatch]
  );

  const handleToggleCompleted = useCallback(
    (id) => {
      dispatch(toggleTaskCompleted(id));
    },
    [dispatch]
  );

  const handleProgressChange = useCallback(
    (id, value) => {
      dispatch(updateTaskProgress({ id, progress: Number(value) }));
    },
    [dispatch]
  );

  const startEditing = useCallback((task) => {
    setEditingTaskId(task.id);
    setEditingText(task.title);
  }, []);

  const saveEdit = useCallback(() => {
    if (!editingText.trim()) {
      setEditingTaskId(null);
      return;
    }
    dispatch(editTask({ id: editingTaskId, changes: { title: editingText.trim() } }));
    setEditingTaskId(null);
  }, [dispatch, editingTaskId, editingText]);

  const taskList = useMemo(
    () =>
      tasks.map((task) => (
        <li key={task.id} className="task-row">
          <div className="task-main">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompleted(task.id)}
              />
              <span>{task.title}</span>
            </label>
            <div className="task-meta">
              <span>{task.progress}% complete</span>
              <button type="button" onClick={() => startEditing(task)}>
                Edit
              </button>
              <button type="button" className="delete-button" onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </div>
          </div>
          <div className="progress-row">
            <input
              type="range"
              min="0"
              max="100"
              value={task.progress}
              onChange={(event) => handleProgressChange(task.id, event.target.value)}
            />
          </div>
        </li>
      )),
    [tasks, handleToggleCompleted, handleDelete, handleProgressChange, startEditing]
  );

  return (
    <section className="task-card">
      <header className="task-card-header">
        <h2>{selectedCategory ? selectedCategory.name : 'All Tasks'}</h2>
        <span>{tasks.length} task{tasks.length === 1 ? '' : 's'}</span>
      </header>
      {tasks.length === 0 ? (
        <p className="empty-state">No tasks found for this category.</p>
      ) : (
        <ul className="task-list">{taskList}</ul>
      )}

      {editingTaskId && (
        <div className="edit-modal">
          <div className="edit-panel">
            <h3>Edit Task</h3>
            <input value={editingText} onChange={(event) => setEditingText(event.target.value)} />
            <div className="edit-actions">
              <button type="button" onClick={saveEdit}>
                Save
              </button>
              <button type="button" className="delete-button" onClick={() => setEditingTaskId(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
