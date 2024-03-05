import React from 'react'
import SidebarFooter from '@/components/ui/SidebarFooter'
import SidebarAccordionAlerts from '@/components/ui/SidebarAccordionAlerts'
import SidebarAccordionLog from '@/components/ui/SedebarAccordionLog'
import { CarouselApi } from '@/components/ui/carousel'
const SidebarContent = (props:{carouselApi:CarouselApi}) => {
  return (
    <div className=' w-full h-full  flex flex-col relative '>
        <div className=' px-4 pt-[30px] w-full gap-[15px] h-[100%] overflow-y-auto
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          pb-[20px]'>
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