// app.js
import express from 'express';
import taskRoutes from './routes/tasks.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Welcome Route
app.get('/', (req, res) => {
    res.send('✅ Task Management API is Running');
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`🚀 Task Management API running at http://localhost:${PORT}`);
});