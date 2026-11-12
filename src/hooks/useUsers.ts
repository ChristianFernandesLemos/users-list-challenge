import { useCallback, useEffect, useState } from 'react'
import type { User } from '../types/user'
import { fetchUsers } from '../services/userService'

interface UseUsersResult {
  users: User[]
  loading: boolean
  error: string | null
  retry: () => void
}

export function useUsers(): UseUsersResult {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    fetchUsers(controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return
        setUsers(data)
        setLoading(false)
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return
        setError(
          err instanceof Error
            ? err.message
            : 'Erro inesperado ao carregar os usuários.',
        )
        setLoading(false)
      })

    return () => controller.abort()
  }, [attempt])

  const retry = useCallback(() => {
    setLoading(true)
    setError(null)
    setAttempt((current) => current + 1)
  }, [])

  return { users, loading, error, retry }
}
