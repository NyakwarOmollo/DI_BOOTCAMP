// routes/todos.js
import express from 'express';

const router = express.Router();
let todos = []; // In-memory storage
let idCounter = 1;

// Get all todos
router.get('/', (req, res) => {
    res.json(todos);
});

// Create new todo
router.post('/', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = {
        id: idCounter++,
        title,
        completed: false,
        createdAt: new Date()
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update todo
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;

    const todo = todos.find(t => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }

    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
});

// Delete todo
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }

    todos.splice(index, 1);
    res.json({ message: "Todo deleted successfully" });
});

export default router;