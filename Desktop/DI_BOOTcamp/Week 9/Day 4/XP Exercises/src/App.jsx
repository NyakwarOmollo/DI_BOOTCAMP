import UserData from './components/UserData';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Redux Thunk User Data</h1>
        <p>Fetches user data from an API and displays it using Redux.</p>
      </header>

      <main>
        <UserData />
      </main>
    </div>
  );
}

export default App;
