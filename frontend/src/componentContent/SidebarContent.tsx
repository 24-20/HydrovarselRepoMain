import React from 'react'
import SidebarFooter from '@/components/ui/SidebarFooter'
import SidebarAccordionAlerts from '@/components/ui/SidebarAccordionAlerts'
const SidebarContent = () => {
  return (
    <div className=' w-full h-screen  flex flex-col'>
        <div className=' px-[10px] pt-[30px] w-full h-screen  flex flex-col gap-[15px] '>
            <div className=' h-12 bg-red-600'>Logo</div>
            <h4>Hydrologiske varsler</h4>
            <SidebarAccordionAlerts />
            <h4>varsel logg</h4>
            <SidebarAccordionAlerts />
        </div>
        
        
        <SidebarFooter />
    </div>
  )
}

export default SidebarContent