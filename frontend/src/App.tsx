
import Dashboard from './pages/Dashboard'
import UserAlerts from './pages/UserAlerts'
import UserAuthLayout from './layout/UserAuthLayout'
import { Toaster } from './components/ui/toaster'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserVerification from './pages/UserVerification'
import PagesContainer from './pageLayouts/PagesContainer'
function App() {

  return (
    <>
    
    <BrowserRouter>
    <UserAuthLayout>
        <Toaster />
        <Routes>
          <Route path='/' element={<PagesContainer/>}>
            <Route index element={ <div>hello</div>}/>
            <Route path='ny-varsel' element={ <Dashboard />}/>
            <Route path='mine-varsel' element={ <UserAlerts />} />            
            <Route path='verifisering' element={<UserVerification />}/>
          </Route>
        </Routes>
        
    </UserAuthLayout>
    </BrowserRouter>
    </>
  )
}

export default App
