import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface SideBarProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const MenuItemBig = ({children, className}:SideBarProps) => {
  return (
    <div className={cn(className,` bg-white rounded-lg flex flex-grow flex-col items-center p-8 `)}>
        
        {
            children
        }
        
    </div>
  )
}

export default MenuItemBig