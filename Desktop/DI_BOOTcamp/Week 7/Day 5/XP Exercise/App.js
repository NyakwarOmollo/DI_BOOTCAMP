import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>React Exercises</h1>

      <hr />
      <h2>Exercise 1: Car Component</h2>
      <Car />

      <hr />
      <h2>Exercise 2: Events</h2>
      <Events />

      <hr />
      <h2>Exercise 3: Phone</h2>
      <Phone />

      <hr />
      <h2>Exercise 4: useEffect Hook</h2>
      <Color />
    </div>
  );
}

export default App;