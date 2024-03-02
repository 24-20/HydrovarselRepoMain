import React, { ReactNode, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
  
} from "../ui/carousel"
import { AlertContent1 } from '@/componentContent/AlertContent'
import AlertAdvancedContent from '@/componentContent/AlertAdvancedContent'
import useDeviceWidth from '@/hooks/useDeviceWidth'
const CarouselAlert = (props:{carouselApi:CarouselApi, setCarouselApi:((api: CarouselApi) => void) | undefined}) => {
  const [current, setCurrent] = React.useState(0)
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
       

        <Carousel className=" shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg w-[96vw] sm:w-[96%] min-w-[300px] min-h-[400px] relative " setApi={props.setCarouselApi}>
          <CarouselContent className=' h-full'>
              {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                  
                  <div className='flex flex-grow min-h-[400px]  bg-card rounded-lg items-center flex-col'>
                    {<AlertContent1/>}
                    {
                      device600px &&
                      <AlertAdvancedContent />
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