import React from 'react'
import SidebarFooter from '@/components/ui/sidebar/SidebarFooter'
import SidebarAccordionAlerts from '@/components/ui/sidebar/SidebarAccordionAlerts'
import SidebarAccordionLog from '@/components/ui/sidebar/SidebarAccordionLog'
import { CarouselApi } from '@/components/ui/carousel'
import { ChevronLeft } from 'lucide-react'
import useDeviceWidth from '@/hooks/useDeviceWidth'
const SidebarContent = (props:{carouselApi:CarouselApi}) => {
  const {device1000px} = useDeviceWidth()
  return (
    <div className=' w-full h-full  flex flex-col relative '>
        <div className=' px-4 md:pt-[85px] w-full gap-[15px] h-[100%] overflow-y-auto
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          pb-[20px]'>
            {
            !device1000px&&
            <div className=' px-9 flex h-[80px] w-full items-center'>Varslinger <ChevronLeft /></div>
            }
            <h4 className=' my-2'>Hydrologiske varsler</h4>
            <SidebarAccordionAlerts carouselApi={props.carouselApi}/>
            <h4 className=' my-2'>Varsel logg</h4>
            <SidebarAccordionLog />
            
        </div>
        
        <SidebarFooter />
    </div>
  )
}

export default SidebarContent