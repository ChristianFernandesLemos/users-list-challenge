import { useId } from 'react'
import styles from './SearchInput.module.css'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const inputId = useId()

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={inputId}>
        Buscar por nome
      </label>
      <input
        className={styles.input}
        id={inputId}
        type="search"
        value={value}
        placeholder="Digite o nome do usuário"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
