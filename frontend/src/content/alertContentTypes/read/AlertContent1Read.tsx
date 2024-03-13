import SidebarAlertCard from '@/components/ui/sidebar/SidebarAlertCard'
import parameterMap from '@/maps/parameterMap'
import { UserNotificationsType } from '@/types/UserNotificationsType'
import { PauseCircle, Trash2 } from 'lucide-react'

import {nanoid} from 'nanoid'
const AlertContent1Read = (props:{data:UserNotificationsType}) => {
    
  return (
    <SidebarAlertCard key={nanoid()}>
        
        <div className=' h-full w-full flex-wrap flex p-2 gap-1'>
            <span>Send meg en</span>
            <div className=' font-semibold'>{props.data.method}</div>
            <span>hvis</span>
            <div className=' font-semibold'>{props.data.parameter}</div>
            
            <span>til</span>
            <div className=' font-semibold'>{props.data.river}</div>
            <span>går</span>
            <div className=' font-semibold'>{props.data.condition} </div>
            <div className='flex gap-1'>
                <div className=' font-semibold'>{props.data.alertVal}</div>
                <span>{parameterMap(props.data.parameter)[0]}</span>
            </div>
        </div>
        <div className=' flex justify-between  w-full pt-2 gap-1 flex-wrap bg-secondary/60 p-2 text-sm'>
            
                
                <div className=' flex gap-1 w-full'>
                    <span>Notat:</span><div className=' font-semibold'>{props.data?.noteInp?props.data.noteInp:'...'}</div>
                </div>
            <div className='flex items-center'>Pause<PauseCircle size={14}/></div>
            <div className='flex items-center'>Fjern<Trash2 size={14}/></div>
        </div>
    </SidebarAlertCard>
  )
}

export default AlertContent1Read