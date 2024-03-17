import React from 'react'
import frontpageImg from '../../assets/hydrovarselFrontpageCropped1.jpg'
const SecondTopbar = () => {
  return (
    <div className='  w-screen lg:w-[calc(100vw_-_300px)] h-[300px] lg:h-[200px] absolute lg:ml-[300px] mt-[65px]'>
        <img src={frontpageImg} alt="frontpage alt" className=' h-full w-full object-cover' />
        <div className='absolute bottom-0 h-[200px] w-full bg-gradient-to-b from-transparent to-background lg:hidden'>

        </div>
    </div>
  )
}

export default SecondTopbar