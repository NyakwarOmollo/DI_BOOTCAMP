import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategorySelector from './components/CategorySelector.jsx';
import TaskList from './components/TaskList.jsx';
import { addTask } from './features/tasksSlice.js';
import { addCategory } from './features/categoriesSlice.js';
import { selectCompletedTasks, selectCategoriesList } from './selectors.js';

const initialTaskTitle = '';
const initialCategoryName = '';

export default function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');
  const [taskTitle, setTaskTitle] = useState(initialTaskTitle);
  const [taskCategoryId, setTaskCategoryId] = useState('cat-1');
  const [categoryName, setCategoryName] = useState(initialCategoryName);

  const dispatch = useDispatch();
  const completedCount = useSelector(selectCompletedTasks);
  const categories = useSelector(selectCategoriesList);

  useEffect(() => {
    if (categories.length > 0 && !taskCategoryId) {
      setTaskCategoryId(categories[0].id);
    }
  }, [categories, taskCategoryId]);

  const handleCategoryChange = useCallback((categoryId) => {
    setSelectedCategoryId(categoryId);
  }, []);

  const handleAddTask = useCallback(
    (event) => {
      event.preventDefault();
      if (!taskTitle.trim()) return;
      dispatch(
        addTask({
          id: `task-${Date.now()}`,
          title: taskTitle.trim(),
          categoryId: taskCategoryId,
          completed: false,
          progress: 0,
        })
      );
      setTaskTitle(initialTaskTitle);
    },
    [dispatch, taskTitle, taskCategoryId]
  );

  const handleAddCategory = useCallback(
    (event) => {
      event.preventDefault();
      if (!categoryName.trim()) return;
      dispatch(
        addCategory({
          id: `cat-${Date.now()}`,
          name: categoryName.trim(),
        })
      );
      setCategoryName(initialCategoryName);
    },
    [dispatch, categoryName]
  );

  return (
    <div className="app-shell">
      <header>
        <h1>Productivity Tracker</h1>
        <p>Use Redux selectors and callbacks to keep your task view fast.</p>
      </header>

      <section className="summary-card">
        <strong>Completed tasks:</strong> {completedCount}
      </section>

      <section className="controls-grid">
        <CategorySelector
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={handleCategoryChange}
          onNewCategoryChange={setCategoryName}
          categoryName={categoryName}
          onAddCategory={handleAddCategory}
        />

        <form className="add-card" onSubmit={handleAddTask}>
          <h2>Add new task</h2>
          <label>
            Task title
            <input
              value={taskTitle}
              onChange={(event) => setTaskTitle(event.target.value)}
              placeholder="Finish a short project"
            />
          </label>
          <label>
            Task category
            <select value={taskCategoryId} onChange={(event) => setTaskCategoryId(event.target.value)}>
            {categories.length === 0 ? (
              <option value="" disabled>Add a category first</option>
            ) : (
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))
            )}
          </select>
          </label>
          <button type="submit">Add task</button>
        </form>
      </section>

      <TaskList selectedCategoryId={selectedCategoryId} />
    </div>
  );
}
