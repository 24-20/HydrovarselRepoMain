import SidebarContent from '@/content/SidebarContent'
import Card from '@/components/ui/Card'
import { SheetContent, SheetTrigger, Sheet, SheetClose } from '@/components/ui/sheet'
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
import AlertAdvancedContent from '@/content/AlertAdvancedContent'
import { AlertRiverType } from '@/types/AlertRiverType'
import { getStations } from '@/lib/getStations'
import { DashboardRiverContextType } from '@/types/DashboardRiverContextType'
import { DashboardUserAlertDataType } from '@/types/DashboardUserAlertData'
import Graph from '@/components/ux/Graph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import parameterMap from '@/maps/parameterMap'
import SideMenuContent from '@/content/SideMenuContent'
import { ChevronDown, ChevronRight, Menu, Plus } from 'lucide-react'
import TopbarItem from '@/components/ui/menu/TopbarItem'
import { parameterType } from '@/types/parameterType'
const DashboardRiverContext = React.createContext<DashboardRiverContextType | null>(null)
const DashboardUserAlertDataContext = React.createContext<DashboardUserAlertDataType | null>(null)
const Dashboard = () => { 
  const {device600px, device1000px} = useDeviceWidth()
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()
  const [stations, setStations] = useState<[] | undefined>()
  const [stationsError, setStationsError] = useState<boolean>(false)
  //DashboardUserAlertData State
  
    const [DashboardRiver, setDashboardRiver] = useState<null | AlertRiverType>(null)
    const [method, setMethod] = useState<'Sms'|'Email'>('Email')
    const [parameter, setParameter] = useState<parameterType>('Vannstand')
    const [conditional, setConditional] = useState<'Over'| 'Under'>('Over')
    const [cooldown, setCooldown] = useState<string>('1 time')
    const [note, setNote] = useState<string >('')
    const [deleteAfterTrigger, setDeleteAfterTrigger] = useState<boolean>(false)
    const [riverParameterDataTrue, setRiverParameterDataTrue] = useState<boolean>(false)
    const [recentRiverValue, setRecentRiverValue] = useState(0)
  useEffect(()=>{
    setDashboardRiver(placeholderRiver)
  },[])
  
  useEffect(()=>{
    async function updatestationstate() {
      const stationAwait = await getStations()
      if (stationAwait?.error) {
        setStationsError(true)
        return 
      } else {
        setStationsError(false)
        setStations(stationAwait)
      }
      
    }
    updatestationstate()
  },[])

  const [displaySettings, setDisplaySettings] = useState<boolean>(false)
  return (
    <div className=' w-full lg:pt-[65px] min-h-screen bg-gradient-to-b from-background from-60% to-card-foreground overflow-x-hidden  '>
      
        <Sidebar className={!device1000px?'left-[-300px]':''}>
            <SidebarContent carouselApi={carouselApi}/>
        </Sidebar>
        <Topbar className={' absolute  top-[0]'}>
          {
            !device1000px&&
          <Sheet >
            <SheetTrigger >
              <div className=' p-2 flex'>Varslinger <ChevronRight /></div>
            </SheetTrigger>
            <SheetContent side={'left'} className=' w-[300px]'>
              <SidebarContent carouselApi={carouselApi}/>
              <SheetClose >
                <h1>close</h1>
              </SheetClose>
            </SheetContent>
          </Sheet>
          }
          
          <div className=' flex justify-between h-full gap-2'>
            <h1 className=' text-white'>Logo</h1>
            {
              device1000px&&
              
            <TopbarItem><ChevronDown /> Om tjenesten</TopbarItem>
            }
          </div>
          
          {
          device1000px&&
          <div className=' flex h-full relative'>
              <TopbarItem> <Plus size={22}/> Ny varsel</TopbarItem>
              <TopbarItem>Mine varsler</TopbarItem>
              <TopbarItem><FontAwesomeIcon icon={faUser}/>Konto</TopbarItem>
          </div>
          }
          {
          !device1000px&&
          <Sheet >
            <SheetTrigger>
              <div className=' p-2.5 bg-blue-700 rounded-lg'>
                  <Menu />
              </div>
            </SheetTrigger>
            <SheetContent side={'right'} className=' max-w-[500px] w-full'>
            <SideMenuContent/>
            </SheetContent>
          </Sheet>
          }
          
          
        </Topbar>
      
        <DashboardRiverContext.Provider value={{DashboardRiver, setDashboardRiver, stations, stationsError, riverParameterDataTrue}} >
        <DashboardUserAlertDataContext.Provider value={{setMethod, method, setParameter, parameter ,setConditional, conditional,
           setCooldown, cooldown, setNote, note, setDeleteAfterTrigger, deleteAfterTrigger}}>
          <DashboardLayout className={`${device1000px?'pl-[300px] pt-6':'pt-[104px]'} mb-6`}>
            <div className=' flex h-fit flex-col-reverse items-center sm:flex-row w-full sm:w-[96%] max-w-[1326px] gap-6'>
              <CarouselAlert carouselApi={carouselApi} setCarouselApi={setCarouselApi}/>
              {
                !device600px && 
                <Card className='max-w-[500px]'>
                  <AlertAdvancedContent setDisplaySettings={setDisplaySettings} displaySettings={displaySettings}/>
                </Card>
              }
            </div>
            <Card className='  max-w-[1326px] h-fit sm:p-4 py-4 flex-grow-0'>
              <div className=' flex justify-between w-full  px-6 my-2 '>
                <div><h2 className=' m-0 mb-6'>{DashboardRiver?.stationName}</h2></div>
                <div className=' flex flex-col gap-2 md:gap-6 md:flex-row items-center relative mb-6'>
                  <h4 className=' m-0'>{parameter}</h4>
                  <h2 className=' m-0 absolute top-6 right-1 text-[34px] w-fit'> { recentRiverValue+parameterMap(parameter)[0]}</h2>
                  {/**<div className=' text-xl font-semibold border-border border p-2'>872,23 {parameterMap(parameter)[0]}</div> */}
                </div>
              </div>
              <Graph parameter={parameter} DashboardRiver={DashboardRiver} setRecentRiverValue={setRecentRiverValue} setRiverParameterDataTrue={setRiverParameterDataTrue}/>
            </Card>
          </DashboardLayout >
        </DashboardUserAlertDataContext.Provider>
        </DashboardRiverContext.Provider>
        
    </div>
  )
}
export {DashboardRiverContext, DashboardUserAlertDataContext}
export default Dashboard
