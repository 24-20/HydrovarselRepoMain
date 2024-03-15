import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
interface SideBarProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
    to:string
  }
const TopbarItem = ({children, className, to}:SideBarProps) => {
  const styles = cn(className,`px-4 hover:bg-blue-700 h-full flex items-center cursor-pointer gap-2 text-[16px]`)
  return (
    <NavLink className={({ isActive }) => (isActive ? `bg-blue-700 ${styles}` : ` ${styles}`)} to={to} >
        {
            children
        }
    </NavLink>
  )
}

export default TopbarItem