import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const DropDown = () => {
  return (
    <div className='md:hidden'>
    <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Table of content</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>Books</DropdownMenuItem>
            <DropdownMenuItem>Authors</DropdownMenuItem>
            <DropdownMenuItem>Readers</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

    </div>
  )
}

export default DropDown