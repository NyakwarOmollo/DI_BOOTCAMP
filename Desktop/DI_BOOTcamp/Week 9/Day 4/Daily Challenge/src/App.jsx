import AgeDisplay from './components/AgeDisplay.jsx';
import AgeControls from './components/AgeControls.jsx';

function App() {
  return (
    <div className="app-shell">
      <h1>Age Tracker</h1>
      <p>Use Redux Toolkit with Thunk to update age asynchronously.</p>
      <AgeDisplay />
      <AgeControls />
    </div>
  );
}

export default App;
