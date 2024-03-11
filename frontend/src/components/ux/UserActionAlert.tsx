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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AlertButton from "../ui/AlertButton"
import { optionType } from "@/types/OptionType"
import useDeviceWidth from '@/hooks/useDeviceWidth'
const UserActionAlert = (props:{options:optionType | null, title:string, activeOption:string, setActiveOption:Function}) => {

    const {device600px} = useDeviceWidth()
  
  
  let i = 0
  return (
    <>
    {
    device600px?
    <Drawer>
        <DrawerTrigger><AlertButton>{props.activeOption}</AlertButton></DrawerTrigger>
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
                                    <DrawerClose className=' outline-none' onClick={()=>props.setActiveOption(opt.value)} key={i}>
                                        <div className={`outline-none h-[35px] items-center border-b border-border  gap-2 bg-foreground  rounded-sm w-[100%] mb-1
                                            flex text-primary-foreground justify-center hover:bg-gray-600 ${opt.value===props.activeOption?' bg-gray-600  ':''} `} >
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
:
    <DropdownMenu>
        <DropdownMenuTrigger><AlertButton>{props.activeOption}</AlertButton></DropdownMenuTrigger>
        <DropdownMenuContent>
        <div className=' w-100% gap-1 flex flex-col p-2'>
            {   

            props.options?props.options.map((opt) => {
                i += 1
                return (
                    <DropdownMenuItem className=' outline-none' onClick={()=>{
                        props.setActiveOption(opt.value)
                    }} key={i}>
                        <div className={` outline-none h-[35px] items-center border-b border-border  gap-2 bg-foreground  text-lg w-[100%] mb-1
                            flex text-primary-foreground justify-center hover:bg-gray-600 ${opt.value===props.activeOption?' bg-gray-600  ':''} `} >
                            {opt.value}
                            <FontAwesomeIcon icon={opt.icon}/>
                        </div>
                    </DropdownMenuItem>
                )
            }):
            <h2>
                no options
            </h2>
            }
            
                
            
        </div>
        </DropdownMenuContent>
      </DropdownMenu>
    }

    </>
  )
}

export default UserActionAlert