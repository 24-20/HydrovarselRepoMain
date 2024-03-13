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
import AlertButton from "../ui/buttons/AlertButton"
import { optionType } from "@/types/OptionType"
const DrawerAlert = (props:{options:optionType | null, title:string, updateState:Function, state:string}) => {
  
  
  let i = 0
  return (
    <Drawer>
  <DrawerTrigger><AlertButton>{props.state}</AlertButton></DrawerTrigger>
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
                            <DrawerClose className=' outline-none' onClick={()=>props.updateState(opt.value)} key={i}>
                                <div className={`outline-none h-[35px] items-center border-b border-border  gap-2 bg-foreground  rounded-sm w-[100%] mb-1
                                    flex text-primary-foreground justify-center hover:bg-gray-600 ${opt.value===props.state?' bg-gray-600  ':''} `} >
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