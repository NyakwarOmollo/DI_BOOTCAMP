// todo-app.js
import { TodoList } from './todo.js';

const todo = new TodoList();

todo.addTask("Learn Node.js Modules");
todo.addTask("Practice ES6 Imports");
todo.addTask("Build a Todo App");
todo.addTask("Master npm packages");

todo.markComplete(todo.tasks[0].id);
todo.markComplete(todo.tasks[2].id);

todo.listTasks();