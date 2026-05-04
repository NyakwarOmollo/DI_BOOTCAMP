// routes/quiz.js
import express from 'express';

const router = express.Router();

// Hard-coded Trivia Questions
const triviaQuestions = [
    {
        id: 1,
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        answer: "Mars"
    },
    {
        id: 3,
        question: "What is the largest mammal in the world?",
        answer: "Blue whale"
    },
    {
        id: 4,
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci"
    },
    {
        id: 5,
        question: "What is the smallest country in the world?",
        answer: "Vatican City"
    }
];

// In-memory game state (for demo purposes)
let currentQuestionIndex = 0;
let score = 0;
let gameInProgress = false;

// GET /quiz - Start or get current question
router.get('/', (req, res) => {
    if (!gameInProgress) {
        // Start new game
        currentQuestionIndex = 0;
        score = 0;
        gameInProgress = true;
    }

    if (currentQuestionIndex >= triviaQuestions.length) {
        return res.redirect('/quiz/score');
    }

    const currentQuestion = triviaQuestions[currentQuestionIndex];

    res.send(`
        <h1>Trivia Quiz Game</h1>
        <h3>Question ${currentQuestionIndex + 1} of ${triviaQuestions.length}</h3>
        <h2>${currentQuestion.question}</h2>
        
        <form action="/quiz" method="POST">
            <input type="text" name="answer" placeholder="Type your answer" required autofocus />
            <br><br>
            <button type="submit">Submit Answer</button>
        </form>
        
        <p><strong>Score: ${score}</strong></p>
    `);
});

// POST /quiz - Submit answer
router.post('/', (req, res) => {
    const userAnswer = req.body.answer?.trim();
    const currentQuestion = triviaQuestions[currentQuestionIndex];

    if (!currentQuestion) {
        return res.redirect('/quiz/score');
    }

    // Check answer (case insensitive)
    const isCorrect = userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase();

    if (isCorrect) {
        score += 10;
        res.send(`
            <h1>✅ Correct!</h1>
            <p>Well done! The answer was <strong>${currentQuestion.answer}</strong></p>
            <p>Current Score: <strong>${score}</strong></p>
            <a href="/quiz"><button>Next Question</button></a>
        `);
    } else {
        res.send(`
            <h1>❌ Wrong Answer</h1>
            <p>The correct answer was: <strong>${currentQuestion.answer}</strong></p>
            <p>Current Score: <strong>${score}</strong></p>
            <a href="/quiz"><button>Next Question</button></a>
        `);
    }

    currentQuestionIndex++;
});

// GET /quiz/score - Show final score
router.get('/score', (req, res) => {
    const totalQuestions = triviaQuestions.length;
    const percentage = Math.round((score / (totalQuestions * 10)) * 100);

    gameInProgress = false;

    res.send(`
        <h1>🏆 Quiz Completed!</h1>
        <h2>Your Final Score: ${score} / ${totalQuestions * 10}</h2>
        <h3>${percentage}%</h3>
        <p>You answered ${score / 10} out of ${totalQuestions} questions correctly.</p>
        
        <a href="/quiz"><button>Play Again</button></a>
        <a href="/"><button>Go Home</button></a>
    `);
});

export default router;