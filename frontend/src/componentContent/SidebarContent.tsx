import React from 'react'
import SidebarFooter from '@/components/ui/SidebarFooter'
import SidebarAccordionAlerts from '@/components/ui/SidebarAccordionAlerts'
import SidebarAccordionLog from '@/components/ui/SedebarAccordionLog'
const SidebarContent = () => {
  return (
    <div className=' w-full h-screen  flex flex-col'>
        <div className=' flex justify-between'><h1 className=' text-foreground'>Logo</h1></div>
        <div className=' px-4 pt-[30px] w-full h-screen  flex flex-col gap-[15px] '>
            <h4>Hydrologiske varsler</h4>
            <SidebarAccordionAlerts />
            <h4>Varsel logg</h4>
            <SidebarAccordionLog />
        </div>
        
        
        <SidebarFooter />
    </div>
  )
}

export default SidebarContent