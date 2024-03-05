import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface SideBarProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const MenuItemSmall = ({children, className}:SideBarProps) => {
  return (
    <div className={cn(className,`w-10/12 h-[55px] bg-white rounded-lg flex items-center px-6 `)}>
        
        {
            children
        }
        
    </div>
  )
}

export default MenuItemSmall