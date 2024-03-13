import NotificationAmount from '@/components/ui/NotificationAmount'
import SidebarAlertCard from '@/components/ui/sidebar/SidebarAlertCard'
import parameterMap from '@/maps/parameterMap'
import { UserNotificationsType } from '@/types/UserNotificationsType'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Pause, PauseCircle, Trash, Trash2 } from 'lucide-react'

import {nanoid} from 'nanoid'
const AlertContent1Read = (props:{data:UserNotificationsType[] | undefined, loading:boolean}) => {
    
  return (
    <div className=' flex flex-col gap-2 max-h-[300px] overflow-y-auto 
     [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:secondary
    [&::-webkit-scrollbar-thumb]:bg-gray-400 drop-shadow-md'
    >
    
    {   
        props.data ?
        props.data.map(obj=>{
            return (
                <SidebarAlertCard key={nanoid()}>
                    
                    <div className=' h-full w-full flex-wrap flex p-2 gap-1'>
                        <span>Send meg en</span>
                        <div className=' font-semibold'>{obj.method}</div>
                        <span>hvis</span>
                        <div className=' font-semibold'>{obj.parameter}</div>
                        
                        <span>til</span>
                        <div className=' font-semibold'>{obj.river}</div>
                        <span>går</span>
                        <div className=' font-semibold'>{obj.condition} </div>
                        <div className='flex gap-1'>
                            <div className=' font-semibold'>{obj.alertVal}</div>
                            <span>{parameterMap(obj.parameter)[0]}</span>
                        </div>
                    </div>
                    <div className=' flex justify-between  w-full pt-2 gap-1 flex-wrap bg-secondary/60 p-2 text-sm'>
                        
                            
                            <div className=' flex gap-1 w-full'>
                                <span>Notat:</span><div className=' font-semibold'>{obj?.noteInp?obj.noteInp:'...'}</div>
                            </div>
                        <div className='flex items-center'>Pause<PauseCircle size={14}/></div>
                        <div className='flex items-center'>Fjern<Trash2 size={14}/></div>
                    </div>
                </SidebarAlertCard>
            )
        })
        :
        <>
        {
            !props.loading&&

            <h5>Du har enda ingen varslinger</h5>
        }
        </>
    }
    {
        props.loading&&
        <p>Loading...</p>
    }
    </div >
  )
}

export default AlertContent1Read