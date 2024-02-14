import React from 'react'
import SidebarFooter from '@/components/ui/SidebarFooter'
import SidebarElement from '@/components/ui/SidebarElement'
const SidebarContent = () => {
  return (
    <div className=' w-full h-screen  flex flex-col'>
        <div className=' px-[10px] pt-[30px] w-full h-screen  flex flex-col gap-[15px] '>
            <div className=' h-12 bg-red-600'>Logo</div>
            <h4>Hydrologiske varsler</h4>
            <SidebarElement alertId={20} >item1</SidebarElement>
            <SidebarElement alertId={20} >item2</SidebarElement>
            <SidebarElement alertId={20} >item3</SidebarElement>
            <SidebarElement alertId={20} >item4</SidebarElement>
            <h4>varsel logg</h4>
            <SidebarElement alertId={20} >item1</SidebarElement>
            <SidebarElement alertId={20} >item2</SidebarElement>
            <SidebarElement alertId={20} >item3</SidebarElement>
            <SidebarElement alertId={20} >item4</SidebarElement>
        </div>
        
        
        <SidebarFooter />
    </div>
  )
}

export default SidebarContent