import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const Topbar = ({children, className=''}:CardProps) => {
  return (
    <nav className={cn(className, ' text-white fixed z-50 w-screen h-[80px] border-b border-border bg-primary backdrop-blur-sm flex justify-between items-center px-6 sm:px-12')}>
        {
            children
        }
    </nav>
  )
}

export default Topbar