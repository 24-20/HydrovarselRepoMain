import SidebarAlertCard from '@/components/ui/sidebar/SidebarAlertCard'
import parameterMap from '@/maps/parameterMap'
import { UserNotificationsType } from '@/types/UserNotificationsType'

import {nanoid} from 'nanoid'
const AlertContent1Read = (props:{data:UserNotificationsType[] | undefined}) => {
  return (
    <div className=' flex flex-col gap-2 max-h-[300px] overflow-y-auto 
     [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:secondary
    [&::-webkit-scrollbar-thumb]:bg-gray-400'>
    {
        props.data&&
        <h5 className=' pl-2'>du har {props.data.length} varslinger</h5>
    }
    {   
        props.data?
        props.data.map(obj=>{
            return (
                <SidebarAlertCard key={nanoid()}>
                    
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
                    <div className=' flex justify-between border-t border-border w-full pt-4 gap-2 flex-wrap'>
                        {
                            obj.noteInp&&
                            <div className=' flex gap-2'>
                                <span>Notat:</span><div>{obj.noteInp}</div>
                            </div>
                        }
                        <div>Slett</div>
                    </div>
                </SidebarAlertCard>
            )
        })
        :
        <h5>Du har enda ingen varslinger</h5>
    }
    </div >
  )
}

export default AlertContent1Read