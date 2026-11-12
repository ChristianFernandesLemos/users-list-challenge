import type { User } from '../types/user'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export async function fetchUsers(signal?: AbortSignal): Promise<User[]> {
  const response = await fetch(API_URL, { signal })

  if (!response.ok) {
    throw new Error(`Não foi possível carregar os usuários (status ${response.status}).`)
  }

  const data: User[] = await response.json()
  return data
}