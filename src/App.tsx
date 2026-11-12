import { ErrorMessage } from './components/ErrorMessage/ErrorMessage'
import { Loading } from './components/Loading/Loading'
import { UserList } from './components/UserList/UserList'
import { useUsers } from './hooks/useUsers'

function App() {
  const { users, loading, error, retry } = useUsers()

  return (
    <main>
      <h1>Lista de Usuários</h1>
      {loading && <Loading />}
      {error && <ErrorMessage message={error} onRetry={retry} />}
      {!loading && !error && <UserList users={users} />}
    </main>
  )
}

export default App