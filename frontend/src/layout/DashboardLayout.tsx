import React, { ReactNode } from 'react'

const DashboardLayout = (props:{children:ReactNode}) => {
  return (
    <div className=' sm:pl-[300px] px-4 w-screen h-screen flex flex-wrap justify-center items-center '>
        {
            props.children
        }
    </div>
  )
}

export default DashboardLayout