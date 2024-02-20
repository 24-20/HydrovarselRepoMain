import React, {ReactNode} from 'react'
import { ChevronDown } from 'lucide-react'
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const AlertButton = ({children, className=''}:CardProps) => {
    
  return (
    <button className='border border-border bg-card-foreground shadow-md px-4 h-[34px] flex gap-2 items-center rounded-lg md:text-lg font-medium outline-none'>
        {children}
        <ChevronDown className=' text-foreground/70'/>
    </button>
  )
}

export default AlertButton