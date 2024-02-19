import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import React from 'react'
import AlertButton from "../ui/AlertButton"

const DropdownAlert = ({options:[]}) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <AlertButton>Open dropdown</AlertButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default DropdownAlert