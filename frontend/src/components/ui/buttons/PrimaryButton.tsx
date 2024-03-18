import {ReactNode} from 'react'
import { cn } from '@/lib/utils'
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
    onClick?:Function
  }
const PrimaryButton = ({children, className='', }:CardProps) => {
    
  return (
    <button className={cn(className,' my-8 sm:my-0 xl:my-4 2xl:my-4 bg-black shadow-md h-[44px] text-lg flex gap-2 items-center text-white rounded-sm font-medium outline-none')}>
        {children}
    </button>
  )
}

export default PrimaryButton