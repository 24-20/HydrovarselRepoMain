import React, { ReactNode } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
  
} from "../ui/carousel"
import { AlertContent1 } from '@/componentContent/AlertContent'

const CarouselAlert = (props:{carouselApi:CarouselApi, setCarouselApi:((api: CarouselApi) => void) | undefined}) => {
  const [current, setCurrent] = React.useState(0)

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
       

        <Carousel className=" shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg w-[96vw] sm:w-[96%] min-w-[300px] h-[400px] relative " setApi={props.setCarouselApi}>
          <CarouselContent className=' h-full'>
              {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                  
                  <div className='flex flex-grow h-[400px]  bg-card rounded-lg items-center flex-col'>
                    <h2>Enkel varsling</h2>
                    {<AlertContent1/>}
                    {index}
                  </div>
                  
              </CarouselItem>
              ))}
          </CarouselContent>
            
          <CarouselNext className=' right-4'/>
          <CarouselPrevious className='left-4'/>
            
            
        </Carousel>
                

        
      )
}


export default CarouselAlert