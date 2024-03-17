import React, { ReactNode } from 'react'

import { cn } from "@/lib/utils"
interface CardProps {
  children:ReactNode 
  className?:string // 👈️ marked optional
}
const Card = ({children, className=''}:CardProps) => {
  return (
    <div className={cn(className,' shadow-md w-[96vw] z-50 sm:w-[96%] min-w-[300px] flex flex-grow min-h-[380px] bg-card rounded-lg items-center flex-col')}>
        {
            children
        }
    </div>
  )
}

export default Card