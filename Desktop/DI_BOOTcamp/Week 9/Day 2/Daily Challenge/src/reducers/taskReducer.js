import { SET_SELECTED_DAY, ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/taskActions.js';

const today = new Date().toISOString().slice(0, 10);

const initialState = {
  selectedDay: today,
  tasksByDay: {},
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_DAY: {
      return {
        ...state,
        selectedDay: action.payload.day,
      };
    }

    case ADD_TASK: {
      const { day, task } = action.payload;
      const existingTasks = state.tasksByDay[day] || [];
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: [...existingTasks, task],
        },
      };
    }

    case EDIT_TASK: {
      const { day, taskId, updates } = action.payload;
      const existingTasks = state.tasksByDay[day] || [];
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: existingTasks.map((task) =>
            task.id === taskId ? { ...task, ...updates } : task
          ),
        },
      };
    }

    case DELETE_TASK: {
      const { day, taskId } = action.payload;
      const existingTasks = state.tasksByDay[day] || [];
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: existingTasks.filter((task) => task.id !== taskId),
        },
      };
    }

    default:
      return state;
  }
}
