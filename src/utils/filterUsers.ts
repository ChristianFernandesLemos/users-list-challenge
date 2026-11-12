import type { User } from '../types/user'

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}

export function filterUsersByName(users: User[], search: string): User[] {
  const term = normalize(search.trim())

  if (!term) return users

  return users.filter((user) => normalize(user.name).includes(term))
}