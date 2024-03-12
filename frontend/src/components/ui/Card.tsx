import React, { ReactNode } from 'react'

import { cn } from "@/lib/utils"
interface CardProps {
  children:ReactNode 
  className?:string // 👈️ marked optional
}
const Card = ({children, className=''}:CardProps) => {
  return (
    <div className={cn(className,' shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] w-[96vw] sm:w-[96%] min-w-[300px] flex flex-grow min-h-[380px] bg-card rounded-lg items-center flex-col')}>
        {
            children
        }
    </div>
  )
}

export default Card