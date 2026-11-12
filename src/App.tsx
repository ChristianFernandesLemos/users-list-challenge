import { UserList } from './components/UserList/UserList'
import { useUsers } from './hooks/useUsers'

function App() {
  const { users } = useUsers()

  return (
    <main>
      <h1>Lista de Usuários</h1>
      <UserList users={users} />
    </main>
  )
}

export default App