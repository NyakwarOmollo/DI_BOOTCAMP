import React from 'react';
import ThemeDemo from './ThemeDemo';        // Rename App from Exercise 1
import CharacterCounter from './CharacterCounter';

function App() {
  return (
    <div>
      <ThemeDemo />
      <hr style={{ margin: '50px 0' }} />
      <CharacterCounter />
    </div>
  );
}

export default App;