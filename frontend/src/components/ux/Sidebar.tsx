import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface SideBarProps {
  children:ReactNode 
  className?:string // 👈️ marked optional
}
const Sidebar = ({children, className}:SideBarProps) => {
  return (
    <nav style={{transition:'0.2s'}} className={cn(className,` p-6 w-[300px] h-screen bg-card-foreground z-50 fixed border-r border-border transition-all `)}>
        <div className=' flex justify-between'><h1 className=' text-foreground'>Logo</h1></div>
        {
            children
        }
        
    </nav>
  )
}

export default Sidebar