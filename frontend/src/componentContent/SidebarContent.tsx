import React from 'react'
import SidebarFooter from '@/components/ui/SidebarFooter'
import SidebarAccordionAlerts from '@/components/ui/SidebarAccordionAlerts'
const SidebarContent = () => {
  return (
    <div className=' w-full h-screen  flex flex-col'>
        <div className=' px-[10px] pt-[30px] w-full h-screen  flex flex-col gap-[15px] '>
            <h1 className=' text-foreground'>Logo</h1>
            <h4>Hydrologiske varsler</h4>
            <SidebarAccordionAlerts />
            <h4>Varsel logg</h4>
            <SidebarAccordionAlerts />
        </div>
        
        
        <SidebarFooter />
    </div>
  )
}

export default SidebarContent