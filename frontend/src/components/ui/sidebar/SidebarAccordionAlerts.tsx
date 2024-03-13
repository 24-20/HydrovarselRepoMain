import React, { ReactNode, useContext, useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Battery, BookOpen, BookOpenText, Hourglass, Percent } from 'lucide-react'
import { CarouselApi } from '../carousel'
import { UserDataContext } from '@/layout/UserAuthLayout'
import AlertContent1Read from '@/content/alertContentTypes/read/AlertContent1Read'
import NotificationAmount from '../NotificationAmount'
const SidebarAccordionAlerts = (props:{carouselApi:CarouselApi}) => {
  const context = useContext(UserDataContext)
  const [current, setCurrent] = useState(0)
  const [activeAccordian, setActiveAccordian] = useState<string| undefined>(undefined)
  const [userNotificationsLoading, setuserNotificationsLoading] = useState<boolean>(false)
  useEffect(()=>{
    if (context?.userNotifications) {
      setuserNotificationsLoading(false)
    } else {
      setuserNotificationsLoading(true)
    }
  },[context?.userNotifications])
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
        }}> <div className=' flex items-center gap-2'><BookOpen size={16} />
         Enkel varsel<NotificationAmount>{context?.userNotifications?.[1].length} </NotificationAmount>     
         </div></AccordionTrigger>
      <AccordionContent>
        {
          /**
           context?.authState?
          <AlertContent1Read data={context.userNotifications?.[1]} loading={userNotificationsLoading}/>
          :
           */
          <p>Du må være logget inn</p>
          
        }
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger onClick={()=>{
        setActiveAccordian('item-2')
        props.carouselApi?.scrollTo(1)
        }}><div className=' flex items-center gap-2'><Percent size={16} /> Prosentvis varsel<NotificationAmount>{context?.userNotifications?.[2].length} </NotificationAmount></div></AccordionTrigger>
      <AccordionContent>
      {
          
          <p>Du må være logget inn</p>
          
        }
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger onClick={()=>{
        setActiveAccordian('item-3')
        props.carouselApi?.scrollTo(2)
        }}><div className=' flex items-center gap-2'><Hourglass size={16} /> Periodisk varsel<NotificationAmount>{context?.userNotifications?.[3].length} </NotificationAmount></div></AccordionTrigger>
      <AccordionContent>
      {
          
          <p>Du må være logget inn</p>
          
        }
      </AccordionContent>
    </AccordionItem>
    
    
    
  </Accordion>
  )
}

export default SidebarAccordionAlerts