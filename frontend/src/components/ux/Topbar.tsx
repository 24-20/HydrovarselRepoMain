import React, { ReactNode } from 'react'
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const Topbar = ({children, className=''}:CardProps) => {
  return (
    <nav className=' fixed w-screen h-[100px]'>
        {
            children
        }
    </nav>
  )
}

export default Topbar