import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import React, { useEffect, useState } from 'react'
import AlertButton from "../ui/AlertButton"
import { optionType } from "@/types/OptionType"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DropdownAlert = (props:{options:optionType | null, title:string, update:boolean, updateInstant:boolean, updateState:Function}) => {
  
  const [activeOption, setActiveOption] = useState<null | string>(null)
  useEffect(()=>{
    if (!props.options) {
      setActiveOption('utilgjengelig')
    } else {
      setActiveOption(props.options[0].value)
    }
  },[props.options])
  
  useEffect(()=>{
    if (props.update) {
      console.log('iuyhbafhl')
      props.updateState(activeOption)
    }
  },[props.update])
  useEffect(()=>{
    if (props.updateInstant && activeOption != 'utilgjengelig' && activeOption) {
      
      props.updateState(activeOption)
    }
  },[activeOption])
  let i = 0
  return (
    <DropdownMenu>
        <DropdownMenuTrigger><AlertButton>{activeOption}</AlertButton></DropdownMenuTrigger>
        <DropdownMenuContent>
        <div className=' w-100% gap-1 flex flex-col p-2'>
                    {   

                    props.options?props.options.map((opt) => {
                        i += 1
                        return (
                            <DropdownMenuItem className=' outline-none' onClick={()=>{
                              if (props.updateInstant) {
                                props.updateState(opt.value)
                              }
                              setActiveOption(opt.value)
                            }} key={i}>
                                <div className={` outline-none h-[35px] items-center border-b border-border  gap-2 bg-foreground  text-lg w-[100%] mb-1
                                    flex text-primary-foreground justify-center hover:bg-gray-600 ${opt.value===activeOption?' bg-gray-600  ':''} `} >
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