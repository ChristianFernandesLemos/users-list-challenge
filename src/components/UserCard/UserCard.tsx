import type { User } from '../../types/user'

interface UserCardProps {
  user: User
  onSelect: (user: User) => void
}

export function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <li>
      <button type="button" onClick={() => onSelect(user)}>
        <strong>{user.name}</strong>
        <span>{user.email}</span>
      </button>
    </li>
  )
}
