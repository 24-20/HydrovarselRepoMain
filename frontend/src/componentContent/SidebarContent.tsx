import React from 'react'
import SidebarFooter from '@/components/ui/SidebarFooter'
import SidebarAccordionAlerts from '@/components/ui/SidebarAccordionAlerts'
import SidebarAccordionLog from '@/components/ui/SedebarAccordionLog'
const SidebarContent = () => {
  return (
    <div className=' w-full h-full  flex flex-col relative '>
        <div className=' flex justify-between h-[10%] max-h-[60px]'><h1 className=' text-foreground'>Logo</h1></div>
        <div className=' px-4 pt-[30px] w-full gap-[15px] h-[100%] overflow-y-scroll  pb-[20px]'>
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