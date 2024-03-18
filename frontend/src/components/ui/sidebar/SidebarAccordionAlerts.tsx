import { useContext, useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {BookOpen, Hourglass, Percent } from 'lucide-react'
import { CarouselApi } from '../carousel'
import { UserDataContext } from '@/layout/UserAuthLayout'
import AlertContent1Read from '@/content/alertContentTypes/read/AlertContent1Read'
import NotificationAmount from '../NotificationAmount'
import InfiniteScroll from 'react-infinite-scroll-component';

const SidebarAccordionAlerts = (props:{carouselApi:CarouselApi}) => {
  const context = useContext(UserDataContext)
  const [current, setCurrent] = useState(0)
  const [activeAccordian, setActiveAccordian] = useState<string| undefined>(undefined)
  const [userNotificationsLoading, setuserNotificationsLoading] = useState<boolean>(false)
  const [userNotificationsUpdated, setuserNotificationsUpdated] = useState<undefined | {1:any[], 2:any[], 3:any[], 4:any[]}>(undefined)
  const [hasMore, sethasMore] = useState<boolean>(true)
  function updateUserNotifications() {
    if (!context?.userNotifications) return
    setuserNotificationsUpdated(context.userNotifications)
  }
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

  //updating
  useEffect(()=>{
    setuserNotificationsUpdated(context?.userNotificationsMaxItems)
  },[context?.userNotifications])
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
          
          context?.authState?
         
           context?.userNotifications?
           <div className='flex flex-col gap-2 max-h-[300px] overflow-y-auto relative
           [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:secondary
          [&::-webkit-scrollbar-thumb]:bg-gray-400
           bg-gradient-to-b from-white to-card-foreground shadow-inner
           '>
           
           
             {
             context?.userNotifications[1].map(obj=>{
               return (
                   <AlertContent1Read data={obj}/>
                 
               )
             })
           }
         </div>
         
         :
         //bruker har ingen varslinger
         <p>Du har ingen varslinger</p>
         
         :
         //bruker er ikke logget inn
         <p>Du må være logget inn</p>
         
       }
       {
       userNotificationsLoading&&
         <p>Loading...</p>
     }
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger onClick={()=>{
        setActiveAccordian('item-2')
        props.carouselApi?.scrollTo(1)
        }}><div className=' flex items-center gap-2'><Percent size={16} /> Prosentvis varsel<NotificationAmount>{context?.userNotifications?.[2].length} </NotificationAmount></div></AccordionTrigger>
      <AccordionContent>
      <div className=' max-h-[300px]'>
      {
          
          context?.authState?
         
           context?.userNotifications?
           <div className='flex flex-col gap-2 max-h-[300px] overflow-y-auto relative
           [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:secondary
          [&::-webkit-scrollbar-thumb]:bg-gray-400
           bg-gradient-to-b from-white to-card-foreground shadow-inner
           '>
           
           
             {
             context?.userNotifications[2].map(obj=>{
               return (
                   <AlertContent1Read data={obj}/>
                 
               )
             })
           }
         </div>
         
         :
         //bruker har ingen varslinger
         <p>Du har ingen varslinger</p>
         
         :
         //bruker er ikke logget inn
         <p>Du må være logget inn</p>
         
       }
       {
       userNotificationsLoading&&
         <p>Loading...</p>
     }
        </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger onClick={()=>{
        setActiveAccordian('item-3')
        props.carouselApi?.scrollTo(2)
        }}><div className=' flex items-center gap-2'><Hourglass size={16} /> Periodisk varsel<NotificationAmount>{context?.userNotifications?.[3].length} </NotificationAmount></div></AccordionTrigger>
      <AccordionContent>
        <div className=' max-h-[300px]'>
        {
          
          context?.authState?
         
           context?.userNotifications?
           (context.userNotifications[3].length>0)?
           <div className='flex flex-col gap-2 max-h-[300px] overflow-y-auto relative
           [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:secondary
          [&::-webkit-scrollbar-thumb]:bg-gray-400
           bg-gradient-to-b from-white to-card-foreground shadow-inner
           '>
           
           
             {
             context?.userNotifications[3].map(obj=>{
               return (
                   <AlertContent1Read data={obj}/>
                 
               )
             })
           }
         </div>
         :
         //du har null slike varslinger
         <p>du har ingen periodiske varslinger</p>
         :
         //bruker har ingen varslinger
         <p>Du har ingen varslinger</p>
         
         :
         //bruker er ikke logget inn
         <p>Du må være logget inn</p>
         
       }
       {
       userNotificationsLoading&&
         <p>Loading...</p>
     }
        </div>
      </AccordionContent>
    </AccordionItem>
    
    
    
  </Accordion>
  )
}

export default SidebarAccordionAlerts