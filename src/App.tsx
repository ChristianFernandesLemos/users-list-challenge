import { useState } from 'react'
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage'
import { Loading } from './components/Loading/Loading'
import { SearchInput } from './components/SearchInput/SearchInput'
import { UserDetailsModal } from './components/UserDetailsModal/UserDetailsModal'
import { UserList } from './components/UserList/UserList'
import { useUsers } from './hooks/useUsers'
import type { User } from './types/user'
import { filterUsersByName } from './utils/filterUsers'

function App() {
  const { users, loading, error, retry } = useUsers()
  const [search, setSearch] = useState('')
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const filteredUsers = filterUsersByName(users, search)
  const total = filteredUsers.length

  return (
    <main>
      <h1>Lista de Usuários</h1>
      {loading && <Loading />}
      {error && <ErrorMessage message={error} onRetry={retry} />}
      {!loading && !error && (
        <>
          <SearchInput value={search} onChange={setSearch} />
          <p aria-live="polite">
            {total === 0
              ? 'Nenhum usuário encontrado.'
              : `${total} ${total === 1 ? 'usuário encontrado' : 'usuários encontrados'}`}
          </p>
          {total > 0 && (
            <UserList users={filteredUsers} onSelect={setSelectedUser} />
          )}
        </>
      )}
      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </main>
  )
}

export default App