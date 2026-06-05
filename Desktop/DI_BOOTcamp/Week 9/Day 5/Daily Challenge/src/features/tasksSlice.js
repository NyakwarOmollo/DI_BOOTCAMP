import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'task-1',
    title: 'Write project plan',
    categoryId: 'cat-1',
    completed: false,
    progress: 30,
  },
  {
    id: 'task-2',
    title: 'Take a walk',
    categoryId: 'cat-2',
    completed: false,
    progress: 50,
  },
  {
    id: 'task-3',
    title: 'Read Redux docs',
    categoryId: 'cat-3',
    completed: true,
    progress: 100,
  },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    editTask(state, action) {
      const { id, changes } = action.payload;
      const task = state.find((item) => item.id === id);
      if (task) {
        Object.assign(task, changes);
      }
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompleted(state, action) {
      const task = state.find((item) => item.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        if (task.completed) {
          task.progress = 100;
        } else if (task.progress === 100) {
          task.progress = 0;
        }
      }
    },
    updateTaskProgress(state, action) {
      const { id, progress } = action.payload;
      const task = state.find((item) => item.id === id);
      if (task) {
        task.progress = Math.max(0, Math.min(100, progress));
        task.completed = task.progress >= 100;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompleted, updateTaskProgress } = tasksSlice.actions;
export default tasksSlice.reducer;
