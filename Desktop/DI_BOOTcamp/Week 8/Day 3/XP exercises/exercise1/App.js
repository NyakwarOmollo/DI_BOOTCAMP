import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import './App.css';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-btn">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}-mode`}>
      <div className="container">
        <h1>Theme Switcher Demo</h1>
        <p>Current Theme: <strong>{theme}</strong></p>
        
        <ThemeSwitcher />

        <div className="card">
          <h2>This is a sample card</h2>
          <p>This content changes based on the selected theme.</p>
        </div>
      </div>
    </div>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}