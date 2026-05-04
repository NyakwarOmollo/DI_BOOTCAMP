// routes/index.js
import express from 'express';

const router = express.Router();

// Home Route
router.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to My Express App</h1>
        <p>This is the homepage.</p>
        <a href="/about">Go to About Page</a>
    `);
});

// About Route
router.get('/about', (req, res) => {
    res.send(`
        <h1>About Us</h1>
        <p>This is a simple Express.js application created for learning routing.</p>
        <a href="/">Go Back Home</a>
    `);
});

export default router;