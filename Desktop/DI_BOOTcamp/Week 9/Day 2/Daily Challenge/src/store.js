import { createStore } from 'redux';
import taskReducer from './reducers/taskReducer.js';

const loadState = () => {
  try {
    const value = localStorage.getItem('dailyPlannerState');
    return value ? JSON.parse(value) : undefined;
  } catch (error) {
    console.warn('Unable to load persisted state:', error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem('dailyPlannerState', JSON.stringify(state));
  } catch (error) {
    console.warn('Unable to save state:', error);
  }
};

const persistedState = loadState();

const store = createStore(taskReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
