import { Outlet } from 'react-router-dom'
const PagesContainer = () => {
  return (
    <div className=' w-full min-h-screen bg-gradient-to-b from-background from-80% to-warmgray200 overflow-x-hidden '>
        
        <Outlet />
    </div>
  )
}

export default PagesContainer