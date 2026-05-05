// server.js
import express from 'express';
import postRoutes from './routes/posts.js';
import pool from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/posts', postRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('Blog API is running 🚀');
});

// Error handling for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});