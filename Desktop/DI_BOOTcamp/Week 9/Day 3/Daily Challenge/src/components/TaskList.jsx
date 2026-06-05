import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask } from '../features/tasksSlice.js';
import EditTask from './EditTask.jsx';
import DeleteTask from './DeleteTask.jsx';

function TaskList() {
  const selectedDay = useSelector((state) => state.tasks.selectedDay);
  const tasks = useSelector((state) => state.tasks.days[selectedDay] || []);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);

  return (
    <div className="task-list">
      <div className="task-list-header">
        <h2>Tasks for {selectedDay}</h2>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-state">No tasks for this day yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <div className="task-item">
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => dispatch(toggleTask({ day: selectedDay, id: task.id }))}
                  />
                  <span>{task.text}</span>
                </label>

                <div className="task-controls">
                  {editingId === task.id ? (
                    <EditTask task={task} day={selectedDay} onClose={() => setEditingId(null)} />
                  ) : (
                    <>
                      <button type="button" onClick={() => setEditingId(task.id)}>
                        Edit
                      </button>
                      <DeleteTask taskId={task.id} day={selectedDay} />
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
