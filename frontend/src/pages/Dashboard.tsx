import SidebarContent from '@/content/SidebarContent'
import Card from '@/components/ui/Card'
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
import parameterMap from '@/maps/parameterMap'

import { parameterType } from '@/types/parameterType'
const DashboardRiverContext = React.createContext<DashboardRiverContextType | null>(null)
const DashboardUserAlertDataContext = React.createContext<DashboardUserAlertDataType | null>(null)
const Dashboard = () => { 
  const {device600px, device1000px} = useDeviceWidth()
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
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
    const [alertLoading, setAlertLoading] = useState<boolean>(false)
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
    <>
      
        {
          device1000px &&
          <Sidebar>
            <SidebarContent carouselApi={carouselApi}/>
        </Sidebar>
        }
        <Topbar className={' absolute  top-[0]'} dashboard={true} carouselApi={carouselApi}/>
          
          
          
      
        <DashboardRiverContext.Provider value={{DashboardRiver, setDashboardRiver, stations, stationsError, riverParameterDataTrue}} >
        <DashboardUserAlertDataContext.Provider value={{setMethod, method, setParameter, parameter ,setConditional, conditional,
           setCooldown, cooldown, setNote, note, setDeleteAfterTrigger, deleteAfterTrigger, alertLoading, setAlertLoading}}>
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
        
    </>
  )
}
export {DashboardRiverContext, DashboardUserAlertDataContext}
export default Dashboard
