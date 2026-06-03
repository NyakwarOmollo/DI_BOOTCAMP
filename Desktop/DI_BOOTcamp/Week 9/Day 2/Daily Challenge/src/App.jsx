import React from 'react';
import { connect } from 'react-redux';
import DatePicker from './components/DatePicker.jsx';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import { setSelectedDay, addTask, editTask, deleteTask } from './actions/taskActions.js';

function App({ selectedDay, tasks, setSelectedDay, addTask, editTask, deleteTask }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Daily Planner</h1>
        <p>Pick a day to view and manage your tasks.</p>
      </header>

      <section className="planner-panel">
        <DatePicker selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        <TaskForm selectedDay={selectedDay} addTask={addTask} />
      </section>

      <section className="task-panel">
        <TaskList
          selectedDay={selectedDay}
          tasks={tasks}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedDay: state.selectedDay,
  tasks: state.tasksByDay[state.selectedDay] || [],
});

const mapDispatchToProps = {
  setSelectedDay,
  addTask,
  editTask,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
