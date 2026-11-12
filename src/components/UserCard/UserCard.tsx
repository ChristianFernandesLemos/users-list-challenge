import type { User } from '../../types/user'

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <li>
      <strong>{user.name}</strong>
      <span>{user.email}</span>
    </li>
  )
}