import './App.css'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import UserCard from './components/UserCard'
import UserList from './components/UserList'

function App() {
  return (
    <main className="app-shell">
      <header className="hero-banner">
        <p className="eyebrow">XP Exercise</p>
        <h1>React + TypeScript Practice</h1>
        <p className="subtitle">
          This page showcases typed props, state, optional props, and API fetching in
          React.
        </p>
      </header>

      <section className="grid">
        <Greeting name="Alex" messageCount={3} />
        <Counter />
        <UserCard name="Maya" age={27} role="Designer" />
        <UserCard />
        <UserList />
      </section>
    </main>
  )
}

export default App
