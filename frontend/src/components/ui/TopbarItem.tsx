import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface SideBarProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const TopbarItem = ({children, className}:SideBarProps) => {
  return (
    <div className={cn(className,`px-4 hover:bg-blue-700 h-full flex items-center cursor-pointer gap-2 text-[16px]`)}>
        {
            children
        }
    </div>
  )
}

export default TopbarItem