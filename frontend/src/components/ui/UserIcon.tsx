import { Smile, User } from 'lucide-react'
import React from 'react'

const UserIcon = () => {
  return (
    <div className=' w-[110px] h-[110px] rounded-full p-1 bg-card shadow-md absolute top-[-55px] lg:relative lg:top-0'>
        <div className='bg-secondary w-full h-full rounded-full relative justify-center flex items-center'>
            <Smile className=' w-[40px] h-[40px] text-primary ' />
        </div>
    </div>
  )
}

export default UserIcon