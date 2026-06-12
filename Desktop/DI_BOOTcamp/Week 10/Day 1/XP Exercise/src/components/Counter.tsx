import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState<number>(0)
  const [lastAction, setLastAction] = useState<string>('No action yet')

  const increment = () => {
    setCount((current) => current + 1)
    setLastAction('Incremented')
  }

  const decrement = () => {
    setCount((current) => current - 1)
    setLastAction('Decremented')
  }

  const reset = () => {
    setCount(0)
    setLastAction('Reset')
  }

  return (
    <section className="card">
      <h2>Counter</h2>
      <p className="value">{count}</p>
      <p>Last action: {lastAction}</p>
      <div className="button-row">
        <button type="button" onClick={increment}>+1</button>
        <button type="button" onClick={decrement}>-1</button>
        <button type="button" onClick={reset}>Reset</button>
      </div>
    </section>
  )
}

export default Counter
