import React, { Component } from 'react';
import './Exercise.css';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div>
        {/* Part I + Part II */}
        <h1 style={style_header}>This is a Header</h1>

        <p className="para">
          This is a paragraph with custom CSS styling.
        </p>

        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          Visit Google
        </a>

        <form>
          <input type="text" placeholder="Enter something" />
          <button type="submit">Submit</button>
        </form>

        <img 
          src="https://via.placeholder.com/300" 
          alt="Placeholder" 
          style={{ margin: '20px 0' }}
        />

        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;