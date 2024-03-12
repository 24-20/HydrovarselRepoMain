import React from 'react'
import DialogSearchContent from '@/content/DialogSearchContent'
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
import AlertButton from '@/components/ui/buttons/AlertButton'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const DialogAlert = () => {
    
    const {DashboardRiver, setDashboardRiver, stations, stationsError} = React.useContext(DashboardRiverContext) as DashboardRiverContextType
  return (
    <Dialog>
        <DialogTrigger><AlertButton icon={faSearch}>{DashboardRiver?.stationName}</AlertButton></DialogTrigger>
        <DialogContent className='bg-card-foreground'>
            <DialogSearchContent DashboardRiver={DashboardRiver} setDashboardRiver={setDashboardRiver} stationData={stations} stationsError={stationsError}/>
        </DialogContent>
    </Dialog>
  )
}

export default DialogAlert