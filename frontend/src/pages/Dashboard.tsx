import SidebarContent from '@/componentContent/SidebarContent'
import Card from '@/components/alert/Card'
import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet'
import Sidebar from '@/components/ux/Sidebar'
import Topbar from '@/components/ux/Topbar'
import useDeviceWidth from '@/hooks/useDeviceWidth'
import DashboardLayout from '@/layout/DashboardLayout'
import React, { useState } from 'react'
import {
  type CarouselApi
} from "@/components/ui/carousel"
import CarouselAlert from '@/components/alert/CarouselAlert'

const Dashboard = () => { 
  const [toggleMenu, setToggleMenu] = useState(true)
  const {device600px, device1000px} = useDeviceWidth()
  const [scrollToFunction, setScrollToFunction] = useState<Function | undefined>()
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()
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

      
        
        <DashboardLayout className={device1000px?'pl-[300px]':'pl-[2%] pt-[60px]'}>
          <h1 className=''> Velkommen tilbake</h1>
          <button onClick={()=>carouselApi?.scrollTo(2)}>scroll to 2</button>
          <div className=' flex h-fit flex-col items-center sm:flex-row w-full sm:w-[96%] max-w-[1326px] gap-6'>
            <CarouselAlert carouselApi={carouselApi} setCarouselApi={setCarouselApi}/>
            <Card className='max-w-[500px]'>
              <h2>Instillinger</h2>
            </Card>
          </div>
          <Card className='  max-w-[1326px] mb-[200px]'>
            <h2>Eiby elva graf</h2>
          </Card>
        </DashboardLayout >
        
    </div>
  )
}

export default Dashboard