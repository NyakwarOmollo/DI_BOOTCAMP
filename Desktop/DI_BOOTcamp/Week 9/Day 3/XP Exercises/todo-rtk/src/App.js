import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="app-container">
      <h1>Redux Toolkit Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
