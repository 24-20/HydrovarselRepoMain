import { cn } from '@/lib/utils'
import { Bell } from 'lucide-react'
import React, { ReactNode } from 'react'
interface CardProps {
    amount:number 
    className?:string // 👈️ marked optional
  }
const BellaAmount = ({amount, className=''}:CardProps) => {
  return (
    <div className='relative h-fit w-fit p-2 pl-0 '  >
        <Bell size={20} className=' text-[#36393F]' />
        <div className={cn(className,' w-[14px] absolute right-2 top-0 h-[14px] bg-destructive flex items-center justify-center rounded-full text-white font-semibold text-[9px] ')}>{amount}</div>
    </div>
  )
}

export default BellaAmount