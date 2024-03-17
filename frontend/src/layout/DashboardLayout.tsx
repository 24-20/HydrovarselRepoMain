import { cn } from '@/lib/utils'
import React, { ReactNode, useState } from 'react'
interface SideBarProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const DashboardLayout = ({children, className}:SideBarProps) => { //min-h = topbar + secondtopbar
  return (
    <div className={cn(className,`w-full lg:min-h-[calc(100vh_-_315px)] h-auto flex flex-col justify-center items-center gap-6 mt-[250px] `)}>
        {
            children
        }
    </div>
  )
}

export default DashboardLayout