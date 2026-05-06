// controllers/taskController.js
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join('data', 'tasks.json');

// Helper function to read tasks
const readTasks = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Helper function to write tasks
const writeTasks = async (tasks) => {
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
};

// Get all tasks
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await readTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error reading tasks" });
    }
};

// Get task by ID
export const getTaskById = async (req, res) => {
    try {
        const tasks = await readTasks();
        const task = tasks.find(t => t.id === parseInt(req.params.id));

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving task" });
    }
};

// Create new task
export const createTask = async (req, res) => {
    try {
        const { title, description, status = "pending" } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const tasks = await readTasks();

        const newTask = {
            id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
            title,
            description: description || "",
            status,
            createdAt: new Date().toISOString()
        };

        tasks.push(newTask);
        await writeTasks(tasks);

        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Error creating task" });
    }
};

// Update task
export const updateTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

        if (taskIndex === -1) {
            return res.status(404).json({ message: "Task not found" });
        }

        tasks[taskIndex] = {
            ...tasks[taskIndex],
            title: title || tasks[taskIndex].title,
            description: description !== undefined ? description : tasks[taskIndex].description,
            status: status || tasks[taskIndex].status,
            updatedAt: new Date().toISOString()
        };

        await writeTasks(tasks);
        res.json(tasks[taskIndex]);
    } catch (error) {
        res.status(500).json({ message: "Error updating task" });
    }
};

// Delete task
export const deleteTask = async (req, res) => {
    try {
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

        if (taskIndex === -1) {
            return res.status(404).json({ message: "Task not found" });
        }

        const deletedTask = tasks.splice(taskIndex, 1);
        await writeTasks(tasks);

        res.json({ message: "Task deleted successfully", task: deletedTask[0] });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task" });
    }
};