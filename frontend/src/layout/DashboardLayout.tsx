import { cn } from '@/lib/utils'
import React, { ReactNode, useState } from 'react'
interface SideBarProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const DashboardLayout = ({children, className}:SideBarProps) => { //min-h = topbar + secondtopbar + userheader
  return (
    <div className={cn(className,`w-full lg:min-h-[calc(100vh_-_515px)] h-auto flex flex-col justify-center items-center gap-6 `)}>
        {
            children
        }
    </div>
  )
}

export default DashboardLayout