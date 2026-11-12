import { useId } from 'react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const inputId = useId()

  return (
    <div>
      <label htmlFor={inputId}>Buscar por nome</label>
      <input
        id={inputId}
        type="search"
        value={value}
        placeholder="Digite o nome do usuário"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
