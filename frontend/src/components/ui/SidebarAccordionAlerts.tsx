import React, { ReactNode, useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Battery, BookOpen, BookOpenText, Hourglass, Percent } from 'lucide-react'
import { CarouselApi } from './carousel'
  
const SidebarAccordionAlerts = (props:{carouselApi:CarouselApi}) => {
  const [current, setCurrent] = useState(0)
  const [activeAccordian, setActiveAccordian] = useState<string| undefined>(undefined)


  //Carousel and accordian functionality
  useEffect(() => {
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

  useEffect(()=>{
    setActiveAccordian(`item-${current+1}`)
  },[current])

  useEffect(()=>{
    if (!props.carouselApi?.selectedScrollSnap()) return
    setCurrent(props.carouselApi?.selectedScrollSnap())
  },[])

  return (
    <Accordion type="single" className="w-full" defaultValue={activeAccordian} value={activeAccordian} >
    <AccordionItem value="item-1">
      <AccordionTrigger onClick={()=>{
        setActiveAccordian('item-1')
        props.carouselApi?.scrollTo(0)
        }}> <div className=' flex items-center gap-2'><BookOpen size={16} /> Enkel varsling</div></AccordionTrigger>
      <AccordionContent>
        {
          
        }
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger onClick={()=>{
        setActiveAccordian('item-2')
        props.carouselApi?.scrollTo(1)
        }}><div className=' flex items-center gap-2'><BookOpenText size={16} /> Avansert varsel</div></AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger onClick={()=>{
        setActiveAccordian('item-3')
        props.carouselApi?.scrollTo(2)
        }}><div className=' flex items-center gap-2'><Percent size={16} /> Prosentvis varsel</div></AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger onClick={()=>{
        setActiveAccordian('item-4')
        props.carouselApi?.scrollTo(3)
        }}><div className=' flex items-center gap-2'><Hourglass size={16} /> Periodisk varsel</div></AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger onClick={()=>{
        setActiveAccordian('item-5')
        props.carouselApi?.scrollTo(4)
        }}><div className=' flex items-center gap-2'><Battery size={16} /> Magasin varsel</div> </AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionContent>
    </AccordionItem>
    
  </Accordion>
  )
}

export default SidebarAccordionAlerts