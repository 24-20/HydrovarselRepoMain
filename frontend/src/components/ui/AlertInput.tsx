import React, {ReactNode, useState} from 'react'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface CardProps {
    className?:string // 👈️ marked optional
    icon?:IconDefinition
    type: 'text' | 'number'
    placeholder:string
  }
const AlertInput = ({ className='', icon=faChevronDown, type, placeholder}:CardProps) => {
    const [inpv, setInpv] = useState<number | string>('')
    return (
        <input className=' w-[150px] border border-border bg-card-foreground shadow-md px-4 h-[34px] flex gap-2 items-center rounded-lg lg:text-lg'
         type={type} placeholder={placeholder} value={inpv} onChange={(e)=>setInpv(e.target.value)}/>
    )
    }

export default AlertInput