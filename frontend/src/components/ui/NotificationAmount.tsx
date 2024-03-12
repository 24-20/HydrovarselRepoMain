import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const NotificationAmount = ({children, className=''}:CardProps) => {
  return (
    <div className={cn(className,' w-[20px] h-[20px] bg-secondary/60 flex items-center justify-center rounded-full text-primary font-semibold text-xs ')}>
        {
            children
        }
    </div>
  )
}

export default NotificationAmount