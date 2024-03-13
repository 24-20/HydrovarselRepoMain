
import Dashboard from './pages/Dashboard'
import UserAuthLayout from './layout/UserAuthLayout'
import { Toaster } from './components/ui/toaster'
function App() {

  return (
    <>
    <UserAuthLayout>
      <Dashboard />
      <Toaster />
    </UserAuthLayout>
    </>
  )
}

export default App
