import type { User } from '../../types/user'
import { UserCard } from '../UserCard/UserCard'

interface UserListProps {
  users: User[]
}

export function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  )
}