import React, { useEffect, useState } from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from '../ui/button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AlertButton from "../ui/AlertButton"
import { optionType } from "@/types/OptionType"
const DrawerAlert = (props:{options:optionType | null, title:string, update:boolean, updateInstant:boolean, updateState:Function}) => {
  const [activeOption, setActiveOption] = useState<null | string>('')
  useEffect(()=>{
    if (!props.options) {
      setActiveOption('utilgjengelig')
    } else {
      setActiveOption(props.options[0].value)
    }
  },[])
  useEffect(()=>{
    if (props.update) {
      console.log('iuyhbafhl')
      props.updateState(activeOption)
    }
  },[props.update])
  let i = 0
  return (
    <Drawer>
  <DrawerTrigger><AlertButton>{activeOption}</AlertButton></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>{props.title}</DrawerTitle>
    </DrawerHeader>
    <DrawerFooter>
    <div className=' w-100% gap-3 flex flex-col'>
                    {   

                    props.options?props.options.map((opt) => {
                        i += 1
                        return (
                            <DrawerClose className=' outline-none' onClick={()=>setActiveOption(opt.value)} key={i}>
                                <div className={`outline-none h-[35px] items-center border-b border-border  gap-2 bg-foreground  rounded-sm w-[100%] mb-1
                                    flex text-primary-foreground justify-center hover:bg-gray-600 ${opt.value===activeOption?' bg-gray-600  ':''} `} >
                                    {opt.value}
                                    <FontAwesomeIcon icon={opt.icon}/>
                                </div>
                            </DrawerClose>
                        )
                    }):
                    <h2>no options</h2>
                    }
                    
                        
                    
                </div>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  )
}

export default DrawerAlert