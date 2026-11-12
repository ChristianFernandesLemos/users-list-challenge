import type { User } from '../../types/user'
import { UserCard } from '../UserCard/UserCard'
import styles from './UserList.module.css'

interface UserListProps {
  users: User[]
  onSelect: (user: User) => void
}

export function UserList({ users, onSelect }: UserListProps) {
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onSelect={onSelect} />
      ))}
    </ul>
  )
}
