import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const Topbar = ({children, className=''}:CardProps) => {
  return (
    <nav className={cn(className, ' text-white fixed z-50 w-screen h-[65px] border-b border-border bg-primary backdrop-blur-sm flex justify-center items-center px-6 sm:px-12')}>
        <div className='flex justify-between items-center w-full h-full max-w-[1800px]'>
        {
            children
        }
        </div>
    </nav>
  )
}

export default Topbar