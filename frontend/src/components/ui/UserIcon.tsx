import { Smile, User } from 'lucide-react'
import React from 'react'

const UserIcon = () => {
  return (
    <div className=' w-[110px] h-[110px] rounded-full p-1 bg-card shadow-md'>
        <div className='bg-secondary w-full h-full rounded-full relative pt-[25%]'>
            <Smile className=' w-full h-[40px] text-primary ' />
        </div>
    </div>
  )
}

export default UserIcon