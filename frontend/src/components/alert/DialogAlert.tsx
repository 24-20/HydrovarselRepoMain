import React from 'react'
import SearchContent from '@/componentContent/DialogSearchContent'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
import { DashboardRiverContext } from '@/pages/Dashboard'
import { DashboardRiverContextType } from '@/types/DashboardRiverContextType'
import AlertButton from '@/components/ui/AlertButton'
const DialogAlert = () => {
    
    const {DashboardRiver, setDashboardRiver, stations} = React.useContext(DashboardRiverContext) as DashboardRiverContextType
  return (
    <Dialog>
        <DialogTrigger><AlertButton>{DashboardRiver?.stationName}</AlertButton></DialogTrigger>
        <DialogContent className='bg-card-foreground'>
            <SearchContent DashboardRiver={DashboardRiver} setDashboardRiver={setDashboardRiver} stationData={stations}/>
        </DialogContent>
    </Dialog>
  )
}

export default DialogAlert