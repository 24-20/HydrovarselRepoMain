import SidebarContent from '@/componentContent/SidebarContent'
import Sidebar from '@/components/ux/Sidebar'
import React from 'react'

const Dashboard = () => {
  return (
    <div className=' w-screen min-h-screen bg-background'>
        <Sidebar>
            <SidebarContent />
        </Sidebar>
    </div>
  )
}

export default Dashboard