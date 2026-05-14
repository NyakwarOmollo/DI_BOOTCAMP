import React, { useState } from 'react';
import './App.css';

const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "Everything you’ve ever wanted is sitting on the other side of fear.", author: "George Addair" },
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" }
];

const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
  '#D4A5A5', '#9B59B6', '#3498DB', '#E74C3C', '#2ECC71'
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [bgColor, setBgColor] = useState(colors[0]);

  const getRandomQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex].quote === currentQuote.quote);

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setCurrentQuote(quotes[randomIndex]);
    setBgColor(randomColor);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor, minHeight: '100vh', transition: 'background-color 0.6s' }}>
      <div className="quote-container">
        <div className="quote-box">
          <h1 className="quote">“{currentQuote.quote}”</h1>
          <p className="author">- {currentQuote.author}</p>

          <button onClick={getRandomQuote} className="new-quote-btn">
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;