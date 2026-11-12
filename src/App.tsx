import { useState } from 'react'
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage'
import { Loading } from './components/Loading/Loading'
import { SearchInput } from './components/SearchInput/SearchInput'
import { UserList } from './components/UserList/UserList'
import { useUsers } from './hooks/useUsers'
import { filterUsersByName } from './utils/filterUsers'

function App() {
  const { users, loading, error, retry } = useUsers()
  const [search, setSearch] = useState('')

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
          {total > 0 && <UserList users={filteredUsers} />}
        </>
      )}
    </main>
  )
}

export default App