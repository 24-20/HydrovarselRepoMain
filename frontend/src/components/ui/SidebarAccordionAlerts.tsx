import React, { ReactNode, useEffect } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Battery, BookOpen, BookOpenText, Hourglass, Percent } from 'lucide-react'
  
const SidebarAccordionAlerts = () => {
    
  return (
    <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger onClick={()=>console.log('clicked')}> <div className=' flex items-center gap-2'><BookOpen size={16} /> Enkel varsling</div></AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern. {}
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger><div className=' flex items-center gap-2'><BookOpenText size={16} /> Avansert varsel</div></AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger><div className=' flex items-center gap-2'><Percent size={16} /> Prosentvis varsel</div></AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger><div className=' flex items-center gap-2'><Hourglass size={16} /> Periodisk varsel</div></AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger><div className=' flex items-center gap-2'><Battery size={16} /> Magasin varsel</div> </AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionContent>
    </AccordionItem>
    
  </Accordion>
  )
}

export default SidebarAccordionAlerts