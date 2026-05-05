// app.js
import express from 'express';
import bookRoutes from './routes/books.js';
import pool from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send('📚 Book API is running on port 5000');
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`🚀 Book API Server running at http://localhost:${PORT}`);
});no