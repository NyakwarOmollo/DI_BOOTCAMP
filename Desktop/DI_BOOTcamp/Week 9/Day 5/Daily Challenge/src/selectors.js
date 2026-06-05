import { createSelector } from '@reduxjs/toolkit';

const selectTasks = (state) => state.tasks;
const selectCategories = (state) => state.categories;

export const selectCompletedTasks = createSelector([selectTasks], (tasks) =>
  tasks.reduce((count, task) => count + (task.completed ? 1 : 0), 0)
);

export const selectCategoryById = createSelector(
  [selectCategories, (_, categoryId) => categoryId],
  (categories, categoryId) => categories.find((category) => category.id === categoryId)
);

export const selectTasksByCategory = createSelector(
  [selectTasks, (_, categoryId) => categoryId],
  (tasks, categoryId) => {
    if (!categoryId || categoryId === 'all') {
      return tasks;
    }
    return tasks.filter((task) => task.categoryId === categoryId);
  }
);

export const selectCategoriesList = createSelector([selectCategories], (categories) => categories);
