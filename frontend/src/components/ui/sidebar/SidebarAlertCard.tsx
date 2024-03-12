import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const SidebarAlertCard = ({children, className=''}:CardProps) => {
  return (
    <div className={cn(className,' w-full flex h-fit bg-secondary/40 rounded-md gap-1 flex-wrap border border-secondary relative ')}>
    
        {children}
    </div>
  )
}

export default SidebarAlertCard