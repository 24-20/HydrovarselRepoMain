import SidebarContent from '@/componentContent/SidebarContent'
import Card from '@/components/alert/Card'
import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet'
import Sidebar from '@/components/ux/Sidebar'
import Topbar from '@/components/ux/Topbar'
import useDeviceWidth from '@/hooks/useDeviceWidth'
import DashboardLayout from '@/layout/DashboardLayout'
import React, { useEffect, useState } from 'react'
import {
  type CarouselApi
} from "@/components/ui/carousel"
import CarouselAlert from '@/components/alert/CarouselAlert'
import { AlertRiverType } from '@/types/AlertRiverType'
import { placeholderRiver } from '@/placeholders/placeholderRiver'
const DashboardRiverContext = React.createContext<null | {DashboardRiver:AlertRiverType | null, setDashboardRiver:Function }>(null)
const Dashboard = () => { 
  const {device600px, device1000px} = useDeviceWidth()
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()
  const [DashboardRiver, setDashboardRiver] = useState<null | AlertRiverType>(null)
  useEffect(()=>{
    setDashboardRiver(placeholderRiver)
  },[])
  return (
    <div className=' w-full min-h-screen bg-gradient-to-b from-background from-60% to-card-foreground overflow-x-hidden '>
      
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

      
        <DashboardRiverContext.Provider value={{DashboardRiver, setDashboardRiver}} >
          <DashboardLayout className={device1000px?'pl-[300px]':'pt-[60px]'}>
            <h1 className=' w-full max-w-[1326px] mt-[40px]'> Velkommen tilbake</h1>
            <button onClick={()=>carouselApi?.scrollTo(2)}>scroll to 2</button>
            <div className=' flex h-fit flex-col items-center sm:flex-row w-full sm:w-[96%]   max-w-[1326px] gap-6'>
              <CarouselAlert carouselApi={carouselApi} setCarouselApi={setCarouselApi}/>
              <Card className='max-w-[500px]'>
                <h2>Instillinger</h2>
              </Card>
            </div>
            <Card className='  max-w-[1326px] mb-[250px]'>
              <h2>Eiby elva graf</h2>
            </Card>
          </DashboardLayout >
        </DashboardRiverContext.Provider>
        
    </div>
  )
}
export {DashboardRiverContext}
export default Dashboard
