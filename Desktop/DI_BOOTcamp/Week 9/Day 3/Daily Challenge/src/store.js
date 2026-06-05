import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasksSlice.js';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
});
