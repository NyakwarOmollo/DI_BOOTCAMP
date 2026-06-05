import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from '../features/books/booksSlice.js';

const genreOptions = ['All', 'Horror', 'Fantasy', 'Science Fiction'];

const selectorMap = {
  All: selectBooks,
  Horror: selectHorrorBooks,
  Fantasy: selectFantasyBooks,
  'Science Fiction': selectScienceFictionBooks,
};

export default function BookList() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const books = useSelector(selectorMap[selectedGenre]);

  return (
    <section style={{ maxWidth: 760, margin: '0 auto', padding: 24 }}>
      <h1>Book Inventory</h1>
      <p>Select a genre to filter books and see the selector update the list.</p>

      <div style={{ marginBottom: 24, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {genreOptions.map(option => (
          <button
            key={option}
            type="button"
            onClick={() => setSelectedGenre(option)}
            style={{
              padding: '10px 16px',
              border: '1px solid #cbd5e1',
              borderRadius: 8,
              background: selectedGenre === option ? '#0f172a' : '#ffffff',
              color: selectedGenre === option ? '#ffffff' : '#0f172a',
            }}
          >
            {option}
          </button>
        ))}
      </div>

      <div style={{ background: '#ffffff', borderRadius: 16, boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)', padding: 24 }}>
        <h2>{selectedGenre} Books</h2>
        {books.length === 0 ? (
          <p>No books found for this genre.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {books.map(book => (
              <li
                key={book.id}
                style={{
                  padding: 16,
                  borderBottom: '1px solid #e2e8f0',
                }}
              >
                <strong>{book.title}</strong>
                <div style={{ color: '#475569', marginTop: 4 }}>
                  {book.author} — <em>{book.genre}</em>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
