import React, { ReactNode } from 'react'

import { cn } from "@/lib/utils"
interface CardProps {
  children:ReactNode 
  className?:string // 👈️ marked optional
}
const Card = ({children, className=''}:CardProps) => {
  return (
    <div className={cn(className,' shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] min-w-[300px] flex flex-grow h-[500px] bg-card ml-6 rounded-lg justify-center flex-row')}>
        {
            children
        }
    </div>
  )
}

export default Card