// app.js
import express from 'express';
import quizRouter from './routes/quiz.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount Quiz Router
app.use('/quiz', quizRouter);

app.get('/', (req, res) => {
    res.send(`
        <h1>🎮 Trivia Quiz Game</h1>
        <p>Welcome! Click below to start the quiz.</p>
        <a href="/quiz"><button>Start Quiz</button></a>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Trivia Quiz Game running at http://localhost:${PORT}`);
});