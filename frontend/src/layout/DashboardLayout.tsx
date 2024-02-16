import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface SideBarProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const DashboardLayout = ({children, className}:SideBarProps) => {
  return (
    <div className={cn(className,`pr-4 w-screen h-screen flex flex-wrap justify-center items-center `)}>
        {
            children
        }
    </div>
  )
}

export default DashboardLayout