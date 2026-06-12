interface GreetingProps {
  name: string
  messageCount: number
}

function Greeting({ name, messageCount }: GreetingProps) {
  return (
    <section className="card">
      <h2>Hello, {name}!</h2>
      <p>
        You have {messageCount} {messageCount === 1 ? 'message' : 'messages'} in
        your inbox.
      </p>
    </section>
  )
}

export default Greeting
