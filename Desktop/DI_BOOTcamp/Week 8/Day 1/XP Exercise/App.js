import React from 'react';
import BuggyCounter from './Components/BuggyCounter';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Error Boundary Exercises</h1>

      {/* Simulation 1 */}
      <h2>Simulation 1: Two Counters in One ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      {/* Simulation 2 */}
      <h2>Simulation 2: Each Counter in its own ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      {/* Simulation 3 */}
      <h2>Simulation 3: No ErrorBoundary</h2>
      <BuggyCounter />
    </div>
  );
}

export default App;