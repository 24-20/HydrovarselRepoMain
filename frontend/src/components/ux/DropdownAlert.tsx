import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import React, { useEffect, useState } from 'react'
import AlertButton from "../ui/buttons/AlertButton"
import { optionType } from "@/types/OptionType"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DropdownAlert = (props:{options:optionType | null, title:string, updateState:Function, state:string}) => {
  

  


  let i = 0
  return (
    <DropdownMenu>
        <DropdownMenuTrigger><AlertButton>{props.state}</AlertButton></DropdownMenuTrigger>
        <DropdownMenuContent>
        <div className=' w-100% gap-1 flex flex-col p-2'>
                    {   

                    props.options?props.options.map((opt) => {
                        i += 1
                        return (
                            <DropdownMenuItem className=' outline-none' onClick={()=>{
                              
                              props.updateState(opt.value)
                              
                            }} key={i}>
                                <div className={` outline-none h-[35px] items-center border-b border-border  gap-2 bg-foreground  text-lg w-[100%] mb-1
                                    flex text-primary-foreground justify-center hover:bg-gray-600 ${opt.value===props.state?' bg-gray-600  ':''} `} >
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

  )
}

export default DropdownAlert