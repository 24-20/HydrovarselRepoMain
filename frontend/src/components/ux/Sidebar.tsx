import React, { ReactNode } from 'react'
const Sidebar = (props:{children:ReactNode}) => {
  return (
    <div className=' w-[300px] h-screen bg-card-foreground z-50 relative'>
        {
            props.children
        }
    </div>
  )
}

export default Sidebar