import SidebarContent from '@/componentContent/SidebarContent'
import Card from '@/components/ui/Card'
import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet'
import Sidebar from '@/components/ux/Sidebar'
import useDeviceWidth from '@/hooks/useDeviceWidth'
import DashboardLayout from '@/layout/DashboardLayout'
import React, { useState } from 'react'

const Dashboard = () => { 
  const [toggleMenu, setToggleMenu] = useState(true)
  const {device600px, device1000px} = useDeviceWidth()
  return (
    <div className=' w-screen min-h-screen bg-background'>
      
        <Sidebar className={!device1000px?'left-[-300px]':''}>
            <SidebarContent />
        </Sidebar>
        <Sheet >
          <SheetTrigger>
            open sheet
          </SheetTrigger>
          <SheetContent side={'left'} className=' w-[300px]'>
            <SidebarContent />
          </SheetContent>
        </Sheet>

      
        
        <DashboardLayout className={device1000px?'pl-[300px]':'pl-[0px]'}>
          <h1 className=' w-full'> Velkommen tilbake</h1>
          <Card className=' max-w-[800px]'>
            <h2>Enkel varsel</h2>
          </Card>
          <Card className='max-w-[500px]'>
            <h2>Instillinger</h2>
          </Card>
          <Card className=' w-11/12 max-w-[1326px]'>
            <h2>Eiby elva graf</h2>
          </Card>
        </DashboardLayout >
        
    </div>
  )
}

export default Dashboard