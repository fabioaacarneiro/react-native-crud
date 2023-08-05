import Navigator from './src/components/Navigator'
import { UserProvider } from './src/context/UsersContext'

export default function App() {
  return (
    <UserProvider>
      <Navigator />
    </UserProvider>
  )
}
