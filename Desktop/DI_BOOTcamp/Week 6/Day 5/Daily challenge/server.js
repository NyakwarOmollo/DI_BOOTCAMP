// server.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Expanded Emoji Database
const emojis = [
    { emoji: '😀', name: 'Grinning Face' },
    { emoji: '😂', name: 'Face with Tears of Joy' },
    { emoji: '😍', name: 'Smiling Face with Heart-Eyes' },
    { emoji: '🥳', name: 'Partying Face' },
    { emoji: '😎', name: 'Smiling Face with Sunglasses' },
    { emoji: '🐶', name: 'Dog Face' },
    { emoji: '🐱', name: 'Cat Face' },
    { emoji: '🐼', name: 'Panda' },
    { emoji: '🦁', name: 'Lion' },
    { emoji: '🐵', name: 'Monkey Face' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🍔', name: 'Hamburger' },
    { emoji: '🍦', name: 'Ice Cream' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🌍', name: 'Globe Showing Europe-Africa' },
    { emoji: '❤️', name: 'Red Heart' },
    { emoji: '🔥', name: 'Fire' },
    { emoji: '💡', name: 'Light Bulb' },
    { emoji: '🎉', name: 'Party Popper' },
    { emoji: '🏆', name: 'Trophy' },
    { emoji: '📱', name: 'Mobile Phone' },
    { emoji: '☕', name: 'Hot Beverage' },
    { emoji: '🌈', name: 'Rainbow' }
];

// In-memory leaderboard (resets on server restart)
let leaderboard = [];

// Get a new question (random emoji + 4 options)
app.get('/api/question', (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomIndex];

    // Get 3 wrong options
    let wrongOptions = emojis
        .filter(e => e.emoji !== correctEmoji.emoji)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const options = [...wrongOptions, correctEmoji]
        .sort(() => Math.random() - 0.5); // Shuffle

    res.json({
        emoji: correctEmoji.emoji,
        options: options.map(opt => opt.name),
        correctName: correctEmoji.name
    });
});

// Submit guess
app.post('/api/guess', (req, res) => {
    const { guess, correctName, score } = req.body;

    const isCorrect = guess === correctName;

    const newScore = isCorrect ? score + 10 : score;

    res.json({
        isCorrect,
        correctName,
        newScore,
        message: isCorrect 
            ? "🎉 Correct! Well done!" 
            : `❌ Wrong! The correct answer was: ${correctName}`
    });
});

// Submit score to leaderboard
app.post('/api/leaderboard', (req, res) => {
    const { playerName, score } = req.body;

    if (!playerName || score === undefined) {
        return res.status(400).json({ error: "Player name and score required" });
    }

    leaderboard.push({ playerName, score, date: new Date().toISOString() });
    
    // Sort descending and keep top 10
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);

    res.json({ success: true, leaderboard });
});

// Get leaderboard
app.get('/api/leaderboard', (req, res) => {
    res.json(leaderboard);
});

app.listen(PORT, () => {
    console.log(`🚀 Emoji Guessing Game running at http://localhost:${PORT}`);
});