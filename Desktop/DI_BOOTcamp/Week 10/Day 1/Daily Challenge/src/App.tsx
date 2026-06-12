import { useState, type ReactNode } from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul className="book-list">{items.map((item, index) => <li key={index}>{renderItem(item)}</li>)}</ul>;
}

export default function App() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
  ]);

  const addBook = () => {
    const newBook: Book = {
      id: Date.now(),
      title: `Book ${books.length + 1}`,
      author: 'New Author',
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <main className="app-shell">
      <section className="panel">
        <p className="eyebrow">TypeScript + React</p>
        <h1>Book List</h1>
        <p className="intro">A reusable generic list component with dynamic book entries.</p>

        <button className="add-button" onClick={addBook} type="button">
          Add a New Book
        </button>

        <List
          items={books}
          renderItem={(book) => (
            <article className="book-card">
              <h2>{book.title}</h2>
              <p>by {book.author}</p>
            </article>
          )}
        />
      </section>
    </main>
  );
}
