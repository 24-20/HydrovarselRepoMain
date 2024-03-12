import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const SidebarAlertCard = ({children, className=''}:CardProps) => {
  return (
    <div className={cn(className,' w-full flex h-fit bg-card-foreground rounded-lg p-2 gap-1 flex-wrap ')}>
    
        {children}
    </div>
  )
}

export default SidebarAlertCard