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
        <Bell />
        <div className={cn(className,' w-[16px] absolute right-2 top-0 h-[16px] bg-destructive flex items-center justify-center rounded-full text-white font-semibold text-xs ')}>{amount}</div>
    </div>
  )
}

export default BellaAmount