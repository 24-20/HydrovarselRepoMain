import {useState, useEffect} from 'react'

interface CardProps {
    className?:string // 👈️ marked optional
    type: 'text' | 'number'
    placeholder:string
    updateState:Function
    update:boolean
  }
const AlertInput = ({ className='', type, placeholder, updateState, update }:CardProps) => {
    const [inpv, setInpv] = useState<number | string>('')
    useEffect(()=>{
      if (update) {
        updateState(inpv)
      }
    },[update])
    return (
        <input className=' w-[150px] border border-border bg-card-foreground shadow-md px-4 h-[34px] flex gap-2 items-center rounded-lg lg:text-lg'
         type={type} placeholder={placeholder} value={inpv} onChange={(e)=>setInpv(e.target.value)}/>
    )
    }

export default AlertInput