import {ReactNode} from 'react'
import { cn } from '@/lib/utils'
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const PrimaryButton = ({children, className=''}:CardProps) => {
    
  return (
    <button className={cn(className,' my-8 sm:my-0 xl:my-4 2xl:my-8 bg-black shadow-md px-8 h-[44px] text-lg flex gap-2 items-center text-white rounded-sm md:text-xl font-medium outline-none')}>
        {children}
    </button>
  )
}

export default PrimaryButton