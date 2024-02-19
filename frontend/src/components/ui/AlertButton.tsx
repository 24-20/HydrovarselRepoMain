import React, {ReactNode} from 'react'
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const AlertButton = ({children, className=''}:CardProps) => {
    
  return (
    <button className='border border-border bg-background'>
        {children}
    </button>
  )
}

export default AlertButton