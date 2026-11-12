import type { User } from '../../types/user'
import styles from './UserCard.module.css'

interface UserCardProps {
  user: User
  onSelect: (user: User) => void
}

export function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <li>
      <button
        className={styles.card}
        type="button"
        onClick={() => onSelect(user)}
      >
        <strong>{user.name}</strong>
        <span className={styles.email}>{user.email}</span>
      </button>
    </li>
  )
}
