// server.js
import express from 'express';
import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Welcome Route
app.get('/', (req, res) => {
    res.send('🔐 User Management API is Running');
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});