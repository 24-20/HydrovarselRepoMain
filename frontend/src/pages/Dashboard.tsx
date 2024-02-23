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
import { placeholderRiver } from '@/placeholders/placeholderRiver'
import AlertAdvancedContent from '@/componentContent/AlertAdvancedContent'
import { AlertRiverType } from '@/types/AlertRiverType'
import { getStations } from '@/lib/getStations'
import { DashboardRiverContextType } from '@/types/DashboardRiverContextType'
const DashboardRiverContext = React.createContext<DashboardRiverContextType | null>(null)
const Dashboard = () => { 
  const {device600px, device1000px} = useDeviceWidth()
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()
  const [DashboardRiver, setDashboardRiver] = useState<null | AlertRiverType>(null)
  useEffect(()=>{
    setDashboardRiver(placeholderRiver)
  },[])
  const [stations, setStations] = useState<[] | undefined>()
  useEffect(()=>{
    async function updatestationstate() {
      const stationAwait = await getStations()
      setStations(stationAwait)
    }
    updatestationstate()
  },[])
  useEffect(()=>{console.log(stations)},[stations])

  return (
    <div className=' w-full min-h-screen bg-gradient-to-b from-background from-60% to-card-foreground overflow-x-hidden '>
      
        <Sidebar className={!device1000px?'left-[-250px]':''}>
            <SidebarContent carouselApi={carouselApi}/>
        </Sidebar>
        <Topbar className={device1000px?' absolute  top-[-80px]':''}>
          <Sheet >
            <SheetTrigger>
              open sheet
            </SheetTrigger>
            <SheetContent side={'left'} className=' w-[250px]'>
              <SidebarContent carouselApi={carouselApi}/>
            </SheetContent>
          </Sheet>
          <div className=' flex justify-between'><h1 className=' text-foreground'>Logo</h1></div>
        </Topbar>
      
        <DashboardRiverContext.Provider value={{DashboardRiver, setDashboardRiver, stations}} >
          <DashboardLayout className={device1000px?'pl-[250px]':'pt-[60px]'}>
            <h1 className=' w-full max-w-[1326px] mt-[40px]'> Velkommen tilbake</h1>
            <div className=' flex h-fit flex-col-reverse items-center sm:flex-row w-full sm:w-[96%]   max-w-[1326px] gap-6'>
              <CarouselAlert carouselApi={carouselApi} setCarouselApi={setCarouselApi}/>
              {
                !device600px && 
                <Card className='max-w-[500px]'>
                  <AlertAdvancedContent />
                </Card>
              }
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
