import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`You pressed Enter! Input value: ${e.target.value}`);
    }
  };

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <h3>Part I: Click Event</h3>
      <button onClick={clickMe}>Click Me</button>

      <h3 style={{ marginTop: '30px' }}>Part II: KeyDown Event</h3>
      <input 
        type="text" 
        placeholder="Press Enter..." 
        onKeyDown={handleKeyDown} 
      />

      <h3 style={{ marginTop: '30px' }}>Part III: Toggle Button</h3>
      <button onClick={toggle}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Events;