import Calendar from './components/Calendar.jsx';
import TaskList from './components/TaskList.jsx';
import AddTaskForm from './components/AddTaskForm.jsx';

function App() {
  return (
    <div className="app-shell">
      <header>
        <h1>Daily Planner</h1>
        <p>View, add, edit, and delete tasks for any selected day.</p>
      </header>

      <main>
        <aside>
          <Calendar />
        </aside>
        <section>
          <AddTaskForm />
          <TaskList />
        </section>
      </main>
    </div>
  );
}

export default App;
