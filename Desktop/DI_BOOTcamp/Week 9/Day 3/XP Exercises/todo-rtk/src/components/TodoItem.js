import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span>{todo.text}</span>
      </label>
      <button className="remove-button" onClick={() => dispatch(removeTodo(todo.id))}>
        Remove
      </button>
    </li>
  );
}

export default TodoItem;
