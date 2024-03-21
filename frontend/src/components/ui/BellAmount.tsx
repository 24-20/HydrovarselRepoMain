import { cn } from '@/lib/utils'
import { Bell } from 'lucide-react'
import React, { ReactNode } from 'react'
interface CardProps {
    amount:number | undefined 
    className?:string // 👈️ marked optional
  }
const BellaAmount = ({amount, className=''}:CardProps) => {
  console.log(amount)
  return (
    <div className='relative h-fit w-fit p-2 pl-0 '  >
        <Bell size={20} className=' text-[#36393F]' />
        {
          (amount)?
          <div className={cn(className,' w-[14px] absolute right-2 top-0 h-[14px] bg-destructive flex items-center justify-center rounded-full text-white font-semibold text-[9px] ')}>
            {amount}
          </div>
          :
          <div className={cn(className,' w-[14px] absolute right-2 top-0 h-[14px] bg-black flex items-center justify-center rounded-full text-white font-semibold text-[9px] ')}>
            0
          </div>
        }
    </div>
  )
}

export default BellaAmount