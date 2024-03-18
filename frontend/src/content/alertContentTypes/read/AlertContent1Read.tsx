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
        <div className=' flex justify-between  w-full pt-2 gap-1 flex-wrap bg-background p-2 text-sm'>
            <p>Rediger varsel <a href='#' className=' text-blue-600 underline'>her</a></p>
        </div>
    </SidebarAlertCard>
  )
}

export default AlertContent1Read