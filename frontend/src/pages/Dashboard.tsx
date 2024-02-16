import SidebarContent from '@/componentContent/SidebarContent'
import Card from '@/components/ui/Card'
import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet'
import Sidebar from '@/components/ux/Sidebar'
import Topbar from '@/components/ux/Topbar'
import useDeviceWidth from '@/hooks/useDeviceWidth'
import DashboardLayout from '@/layout/DashboardLayout'
import React, { useState } from 'react'

const Dashboard = () => { 
  const [toggleMenu, setToggleMenu] = useState(true)
  const {device600px, device1000px} = useDeviceWidth()
  return (
    <div className=' w-screen min-h-screen bg-gradient-to-b from-background from-60% to-card-foreground'>
      
        <Sidebar className={!device1000px?'left-[-300px]':''}>
            <SidebarContent />
        </Sidebar>
        <Topbar className={device1000px?' absolute  top-[-80px]':''}>
          <Sheet >
            <SheetTrigger>
              open sheet
            </SheetTrigger>
            <SheetContent side={'left'} className=' w-[300px]'>
              <SidebarContent />
            </SheetContent>
          </Sheet>
          <div className=' flex justify-between'><h1 className=' text-foreground'>Logo</h1></div>
        </Topbar>

      
        
        <DashboardLayout className={device1000px?'pl-[300px]':'pl-[0px] pt-[60px]'}>
          <h1 className=' w-full ml-6'> Velkommen tilbake</h1>
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