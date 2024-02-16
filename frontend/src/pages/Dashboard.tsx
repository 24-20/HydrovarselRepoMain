import SidebarContent from '@/componentContent/SidebarContent'
import Card from '@/components/ui/Card'
import Sidebar from '@/components/ux/Sidebar'
import DashboardLayout from '@/layout/DashboardLayout'
import React, { useState } from 'react'

const Dashboard = () => { 
  const [toggleMenu, setToggleMenu] = useState(true)
  return (
    <div className=' w-screen min-h-screen bg-background'>
        <Sidebar >
            <SidebarContent />
        </Sidebar>
        <DashboardLayout>
          <h1 className=' w-full'> Velkommen tilbake</h1>
          <Card className=' max-w-[800px]'>
            <h1>Enkel varsel</h1>
          </Card>
          <Card className='max-w-[500px]'>
            <h1>Instillinger</h1>
          </Card>
          <Card className=' w-11/12 max-w-[1326px]'>
            <h1>Eiby elva graf</h1>
          </Card>
        </DashboardLayout>
        
    </div>
  )
}

export default Dashboard