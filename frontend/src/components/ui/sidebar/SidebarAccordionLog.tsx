import React, { ReactNode, useEffect } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Mail, Smartphone } from 'lucide-react'
  
const SidebarAccordionLog = () => {
    
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