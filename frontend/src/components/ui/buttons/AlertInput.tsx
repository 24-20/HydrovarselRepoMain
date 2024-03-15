import {useState, useEffect} from 'react'

interface CardProps {
    className?:string // 👈️ marked optional
    type: 'text' | 'number'
    placeholder:string
    updateState:Function
    state:string
  }
const AlertInput = ({ className='', type, placeholder, updateState, state }:CardProps) => {
    
    return (
        <input className=' w-[150px] border border-border bg-card-foreground shadow-md px-4 h-[34px] flex gap-2 items-center rounded-lg focus:outline outline-2 outline-border lg:text-lg hover:outline'
         type={type} placeholder={placeholder} value={state} onChange={(e)=>updateState(e.target.value)}/>
    )
    }

export default AlertInput