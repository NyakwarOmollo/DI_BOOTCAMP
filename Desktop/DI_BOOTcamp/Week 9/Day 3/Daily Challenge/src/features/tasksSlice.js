import { createSlice, nanoid } from '@reduxjs/toolkit';

const today = new Date().toISOString().slice(0, 10);

const initialState = {
  selectedDay: today,
  days: {
    [today]: [
      {
        id: nanoid(),
        text: 'Sample task: plan your day',
        completed: false
      }
    ]
  }
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    selectDay(state, action) {
      state.selectedDay = action.payload;
      if (!state.days[action.payload]) {
        state.days[action.payload] = [];
      }
    },
    addTask: {
      reducer(state, action) {
        const { day, task } = action.payload;
        state.days[day].push(task);
      },
      prepare(day, text) {
        return {
          payload: {
            day,
            task: {
              id: nanoid(),
              text,
              completed: false
            }
          }
        };
      }
    },
    editTask(state, action) {
      const { day, id, text } = action.payload;
      const task = state.days[day].find((item) => item.id === id);
      if (task) {
        task.text = text;
      }
    },
    deleteTask(state, action) {
      const { day, id } = action.payload;
      state.days[day] = state.days[day].filter((item) => item.id !== id);
    },
    toggleTask(state, action) {
      const { day, id } = action.payload;
      const task = state.days[day].find((item) => item.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
});

export const { selectDay, addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
