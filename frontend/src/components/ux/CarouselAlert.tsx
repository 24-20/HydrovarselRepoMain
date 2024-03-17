import React, { ReactNode, useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
  
} from "../ui/carousel"
import { AlertContent } from '@/content/AlertContent'
import AlertAdvancedContent from '@/content/AlertAdvancedContent'
import useDeviceWidth from '@/hooks/useDeviceWidth'
const CarouselAlert = (props:{carouselApi:CarouselApi, setCarouselApi:((api: CarouselApi) => void) | undefined}) => {
  const [current, setCurrent] = React.useState(0)
  const [displaySettings, setDisplaySettings] = useState<boolean>(false)
  const {device600px} = useDeviceWidth()
  React.useEffect(() => {
    if (!props.carouselApi) {
      return
    }
    props.carouselApi.on("select", () => {
      if (!props.carouselApi) {
        return
      }
      setCurrent(props.carouselApi.selectedScrollSnap() )
    })
  }, [props.carouselApi])
  
    return (
       

        <Carousel className=" shadow-md rounded-lg w-[96vw] sm:w-[96%] min-w-[300px] min-h-[380px] relative " setApi={props.setCarouselApi}>
          <CarouselContent className=' h-full'>
              {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                  
                  <div className={`flex  min-h-[380px] h-full
                    rounded-lg items-center flex-col bg-card
                    ${index===0?'border-alert1':index===1?'border-alert2':'border-alert3'}`}>
                    {<AlertContent index={index}/>}
                    {
                      device600px &&
                      <AlertAdvancedContent setDisplaySettings={setDisplaySettings} displaySettings={displaySettings}/>
                    }

                  </div>
                  
              </CarouselItem>
              ))}
          </CarouselContent>
            
          <CarouselNext className=' right-0'/>
          <CarouselPrevious className='left-0'/>
            
            
        </Carousel>
                

        
      )
}


export default CarouselAlert