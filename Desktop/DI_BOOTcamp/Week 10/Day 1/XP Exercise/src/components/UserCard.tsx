interface UserCardProps {
  name?: string
  age?: number
  role?: string
}

function UserCard({
  name = 'Anonymous',
  age = 18,
  role = 'Member',
}: UserCardProps) {
  return (
    <article className="card user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </article>
  )
}

export default UserCard
