import React, { ReactNode, useContext, useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Mail, Smartphone } from 'lucide-react'
  import { UserDataContext } from '@/layout/UserAuthLayout'
const SidebarAccordionLog = () => {
    const userdatacontext = useContext(UserDataContext)
    const [alertLogDataAll, setAlertLogDataAll] = useState<null | {}[]>(null)
    const [alertLogData1, setAlertLogData1] = useState(null)
    const [alertLogData2, setAlertLogData2] = useState(null)
    const [alertLogData3, setAlertLogData3] = useState(null)
    useEffect(()=>{
      if (userdatacontext?.userData) {
        setAlertLogDataAll(userdatacontext.userData.alertLogField)
      }
    },[userdatacontext?.userData])
    useEffect(()=>{
      console.log(userdatacontext?.userNotifications)
      if (alertLogDataAll) {
        for (let i = 0;i<alertLogDataAll.length;i++) {

        }
      }
    },[alertLogDataAll])
  return (
    <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger onClick={()=>console.log('clicked')}><div className=' flex items-center gap-2'><Mail size={16} /> Email</div></AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern. {}
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger><div className=' flex items-center gap-2'><Smartphone size={16} /> Sms</div></AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger><div className=' flex items-center gap-2'>Begge</div></AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionContent>
    </AccordionItem>
    
  </Accordion>
  )
}

export default SidebarAccordionLog