
import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
interface SideBarProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
    to:string
  }
const MenuItemSmall = ({children, className, to}:SideBarProps) => {
  const styles = cn(className,`w-10/12 h-[55px] bg-white rounded-lg flex items-center px-6 `)
  return (
    <NavLink className={({ isActive }) => (isActive ? `bg-blue-700 ${styles}` : ` ${styles}`)} to={to} >
        {
            children
        }
    </NavLink>
  )
}

export default MenuItemSmall