import React, { ReactNode } from 'react'
const Sidebar = (props:{children:ReactNode}) => {
  return (
    <div className={` w-[300px] h-screen bg-card-foreground z-50 fixed border-r border-border `}>
        <div className=' flex justify-between'><h1 className=' text-foreground'>Logo</h1></div>
        {
            props.children
        }
    </div>
  )
}

export default Sidebar