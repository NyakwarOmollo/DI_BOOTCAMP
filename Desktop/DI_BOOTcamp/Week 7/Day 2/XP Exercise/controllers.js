// controllers/bookController.js
import Book from '../models/Book.js';

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createBook = async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;

        if (!title || !author) {
            return res.status(400).json({ message: "Title and Author are required" });
        }

        const newBook = await Book.create(title, author, publishedYear);
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateBook = async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;
        const updatedBook = await Book.update(req.params.bookId, title, author, publishedYear);

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.delete(req.params.bookId);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};