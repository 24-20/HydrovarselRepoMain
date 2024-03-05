import { cn } from '@/lib/utils'
import React, { ReactNode, useState } from 'react'
interface SideBarProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const DashboardLayout = ({children, className}:SideBarProps) => {
  return (
    <div className={cn(className,`w-full min-h-screen h-auto flex flex-col justify-center items-center gap-6  pb-[200px]`)}>
        {
            children
        }
    </div>
  )
}

export default DashboardLayout