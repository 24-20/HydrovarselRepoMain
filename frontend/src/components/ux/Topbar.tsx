import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
import SideMenuContent from '@/content/SideMenuContent'
import { ChevronDown, ChevronRight, List, ListChecks, Menu, Plus, User } from 'lucide-react'
import TopbarItem from '@/components/ui/menu/TopbarItem'

import { SheetContent, SheetTrigger, Sheet, SheetClose } from '@/components/ui/sheet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import SidebarContent from '@/content/SidebarContent'
import useDeviceWidth from '@/hooks/useDeviceWidth'
import {
  type CarouselApi
} from "@/components/ui/carousel"
import { NavLink } from 'react-router-dom'
import { UserDataContext } from '@/layout/UserAuthLayout'

  interface CardProps {
    className?:string // 👈️ marked optional
    dashboard:boolean
    carouselApi?:CarouselApi
  }
const Topbar = ({className='', dashboard, carouselApi}:CardProps) => {
  const userdatacontext = React.useContext(UserDataContext)
  const {device600px, device1000px} = useDeviceWidth()
  return (
    <nav className={cn(className, ' text-white fixed z-50 w-screen h-[65px] bg-primary backdrop-blur-sm flex justify-center items-center px-6 sm:px-12  mb-[65px]')}>
        <div className='flex justify-between items-center w-full h-full max-w-[1800px]'>
        {
            !device1000px && dashboard&&
            
          <Sheet >
            <SheetTrigger >
              <div className=' p-2 flex'> Varslinger <ChevronRight /></div>
            </SheetTrigger>
            <SheetContent side={'left'} className=' w-[300px]'>
              <SidebarContent carouselApi={carouselApi}/>
              
            </SheetContent>
          </Sheet>
          }
          
          <div className=' flex justify-between h-full gap-2'>
            <h1 className=' text-white'>Logo</h1>
            {
              device1000px&&
              
            <TopbarItem to='/info'><ChevronDown /> Info</TopbarItem>
            }
          </div>
          
          {
          device1000px&&
          <div className=' flex h-full relative'>
              <TopbarItem to='/ny-varsel'> <Plus size={22}/> Ny varsel</TopbarItem>
              
              <TopbarItem to='/mine-varsel'> <List size={22}/>Mine varsel</TopbarItem>
              {
                userdatacontext?.authState &&
              <TopbarItem to='/konto'> <User size={22}/> Konto</TopbarItem>
                
              }
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
        </div>
    </nav>
  )
}

export default Topbar