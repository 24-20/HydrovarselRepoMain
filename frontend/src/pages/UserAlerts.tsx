import Topbar from '@/components/ux/Topbar'
import { BookOpen, Hourglass, Percent } from 'lucide-react'
import React from 'react'

const UserAlerts = () => {
  return (
    <div className=' w-full h-full flex justify-center '>
        <Topbar dashboard={false}/>
        <div className='pt-[65px] w-full max-w-[1200px] pl-[10%] xl:pl-0 '>
            
            <h3>Mine varsel</h3>
            <p >Her kan du se alle dine varsler, samt pause og slette</p>
           
            <h2 className='flex items-center gap-2' >Enkel varsel <BookOpen size={20} /></h2>
            
            <h2 className='flex items-center gap-2' >Prosentvis varsel<Percent size={20} /></h2>
            
        <h2 className='flex items-center gap-2' >Periodisk varsel<Hourglass size={16} /></h2>
            <h3>Varsel logg</h3>
            <p >Her kan du se alle varsler du har mottat</p>
        </div>
    </div>
  )
}

export default UserAlerts