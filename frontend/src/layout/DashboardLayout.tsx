import { cn } from '@/lib/utils'
import React, { ReactNode, useState } from 'react'
interface SideBarProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const DashboardLayout = ({children, className}:SideBarProps) => {
  return (
    <div className={cn(className,`pr-4 w-screen h-screen flex flex-col justify-center items-center gap-6 `)}>
        {
            children
        }
    </div>
  )
}

export default DashboardLayout