import React, { useState, useRef, useEffect } from 'react';

function CharacterCounter() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleInput = () => {
    setCount(inputRef.current.value.length);
  };

  // Optional: Focus input when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Character Counter</h2>
      
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        onInput={handleInput}
        style={{
          padding: '12px',
          fontSize: '18px',
          width: '400px',
          margin: '20px 0'
        }}
      />

      <h3>
        Character Count: <span style={{ color: count > 100 ? 'red' : 'green' }}>
          {count}
        </span>
      </h3>

      {count > 100 && <p style={{ color: 'red' }}>⚠️ Too many characters!</p>}
    </div>
  );
}

export default CharacterCounter;