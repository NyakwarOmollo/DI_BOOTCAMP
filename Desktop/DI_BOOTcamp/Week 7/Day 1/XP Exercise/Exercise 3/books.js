// routes/books.js
import express from 'express';

const router = express.Router();
let books = []; // In-memory storage
let idCounter = 1;

// Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// Add new book
router.post('/', (req, res) => {
    const { title, author, year } = req.body;

    if (!title || !author) {
        return res.status(400).json({ error: "Title and Author are required" });
    }

    const newBook = {
        id: idCounter++,
        title,
        author,
        year: year || new Date().getFullYear(),
        createdAt: new Date()
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// Update book
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author, year } = req.body;

    const book = books.find(b => b.id === id);
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }

    if (title) book.title = title;
    if (author) book.author = author;
    if (year) book.year = year;

    res.json(book);
});

// Delete book
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Book not found" });
    }

    books.splice(index, 1);
    res.json({ message: "Book deleted successfully" });
});

export default router;