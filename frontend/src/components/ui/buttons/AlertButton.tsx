import React, {ReactNode} from 'react'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
    icon?:IconDefinition
  }
const AlertButton = ({children, className='', icon=faChevronDown}:CardProps) => {
    
  return (
    <div className='border border-border bg-card-foreground shadow-md px-4 h-[34px] flex gap-2 items-center rounded-lg outline-2 outline-border lg:text-lg hover:outline'>
        {children}
        <FontAwesomeIcon className=' text-foreground/70' size='sm' icon={icon}/>
    </div>
  )
}

export default AlertButton