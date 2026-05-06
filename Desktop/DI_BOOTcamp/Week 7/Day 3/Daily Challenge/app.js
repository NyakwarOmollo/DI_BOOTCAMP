// app.js
import express from 'express';
import authRoutes from './auth.js';

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));   // Serve HTML files from project root

// Routes
app.use(authRoutes);

// Welcome Route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to User Auth API</h1>
        <p><a href="/register.html">Register</a> | <a href="/login.html">Login</a></p>
    `);
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📄 Register: http://localhost:${PORT}/register.html`);
    console.log(`🔑 Login: http://localhost:${PORT}/login.html`);
});