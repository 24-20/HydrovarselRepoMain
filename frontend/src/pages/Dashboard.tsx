import SidebarContent from '@/componentContent/SidebarContent'
import Card from '@/components/ui/Card'
import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet'
import Sidebar from '@/components/ux/Sidebar'
import Topbar from '@/components/ux/Topbar'
import useDeviceWidth from '@/hooks/useDeviceWidth'
import DashboardLayout from '@/layout/DashboardLayout'
import React, { useEffect, useState } from 'react'
import {
  type CarouselApi
} from "@/components/ui/carousel"
import CarouselAlert from '@/components/ux/CarouselAlert'
import { placeholderRiver } from '@/placeholders/placeholderRiver'
import AlertAdvancedContent from '@/componentContent/AlertAdvancedContent'
import { AlertRiverType } from '@/types/AlertRiverType'
import { getStations } from '@/lib/getStations'
import { DashboardRiverContextType } from '@/types/DashboardRiverContextType'
import { DashboardUserAlertDataType } from '@/types/DashboardUserAlertData'
const DashboardRiverContext = React.createContext<DashboardRiverContextType | null>(null)
const DashboardUserAlertDataContext = React.createContext<DashboardUserAlertDataType | null>(null)
const Dashboard = () => { 
  const {device600px, device1000px} = useDeviceWidth()
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()
  const [DashboardRiver, setDashboardRiver] = useState<null | AlertRiverType>(null)

  //DashboardUserAlertData State
  const [method, setMethod] = useState<'Sms'|'Email'>('Email')
    const [parameter, setParameter] = useState<'Vannføring'|'Vannstand'| 'Vanntemperatur'| 'Lufttemperatur' | 'Magasinvolum' | 'Nedbør'>('Vannføring')
    const [conditional, setConditional] = useState<'Over'| 'Under'>('Over')
    const [inputValue, setInputValue] = useState<number | null>(null)
    const [cooldown, setCooldown] = useState<string>('1 time')
    const [note, setNote] = useState<string | null>(null)
    const [activateAlert, setActivateAlert] = useState(false)

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
    <div className=' w-full lg:pt-[80px] min-h-screen bg-gradient-to-b from-background from-60% to-card-foreground overflow-x-hidden '>
      
        <Sidebar className={!device1000px?'left-[-250px]':''}>
            <SidebarContent carouselApi={carouselApi}/>
        </Sidebar>
        <Topbar className={' absolute  top-[0]'}>
          {
            !device1000px&&
          <Sheet >
            <SheetTrigger>
              open sheet
            </SheetTrigger>
            <SheetContent side={'left'} className=' w-[250px]'>
              <SidebarContent carouselApi={carouselApi}/>
            </SheetContent>
          </Sheet>
          }
          
          <div className=' flex justify-between'><h1 className=' text-white'>Logo</h1></div>
            
          
          
        </Topbar>
      
        <DashboardRiverContext.Provider value={{DashboardRiver, setDashboardRiver, stations}} >
        <DashboardUserAlertDataContext.Provider value={{setMethod, setParameter,setConditional,setInputValue, setCooldown, setNote, parameter, setActivateAlert, activateAlert}}>
          <DashboardLayout className={device1000px?'pl-[250px]':'pt-[60px]'}>
            <h1 className=' w-full max-w-[1326px] mt-[40px] text-background'>  1</h1>
            <div className=' flex h-fit flex-col-reverse items-center sm:flex-row w-full sm:w-[96%]   max-w-[1326px] gap-6'>
              <CarouselAlert carouselApi={carouselApi} setCarouselApi={setCarouselApi}/>
              {
                !device600px && 
                <Card className='max-w-[500px]'>
                  <AlertAdvancedContent />
                </Card>
              }
            </div>
            <Card className='  max-w-[1326px] mb-[250px] mt-[40px]'>
              <h2>Eiby elva graf</h2>
            </Card>
          </DashboardLayout >
        </DashboardUserAlertDataContext.Provider>
        </DashboardRiverContext.Provider>
        
    </div>
  )
}
export {DashboardRiverContext, DashboardUserAlertDataContext}
export default Dashboard
