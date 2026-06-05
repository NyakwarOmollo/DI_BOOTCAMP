import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'cat-1', name: 'Work' },
  { id: 'cat-2', name: 'Health' },
  { id: 'cat-3', name: 'Learning' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action) {
      state.push(action.payload);
    },
    editCategory(state, action) {
      const { id, name } = action.payload;
      const category = state.find((item) => item.id === id);
      if (category) {
        category.name = name;
      }
    },
    deleteCategory(state, action) {
      return state.filter((category) => category.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
