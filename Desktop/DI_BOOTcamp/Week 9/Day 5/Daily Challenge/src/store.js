import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasksSlice.js';
import categoriesReducer from './features/categoriesSlice.js';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer,
  },
});
