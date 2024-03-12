import { useState } from 'react'
import { Button } from './components/ui/button'
import Dashboard from './pages/Dashboard'
import UserAuthLayout from './layout/UserAuthLayout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserAuthLayout>
      <Dashboard />
    </UserAuthLayout>
    </>
  )
}

export default App
