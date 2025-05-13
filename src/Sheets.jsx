import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Sheets = () => {
  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger>Click Me</SheetTrigger>
        <SheetContent side="right">
          <div>Here</div>
          <div>Here</div>
          <div>Here</div>
          <div>Here</div>
          <div>Here</div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Sheets