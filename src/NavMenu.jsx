import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const NavMenu = () => {
  return (
    <nav className='hidden lg:flex w-full bg-white border-b py-4  justify-center shadow-sm sticky top-0 z-50'>
       <NavigationMenu >
              <NavigationMenuList>
                <NavigationMenuItem className="cursor-pointer ">
                  {/* <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[200px] flex justify-center p-4"> */}
                    <NavigationMenuLink className="cursor:pointer">Link</NavigationMenuLink>
                  {/* </NavigationMenuContent> */}
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {/* <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[200px] flex justify-center p-4"> */}
                    <NavigationMenuLink>Link 2</NavigationMenuLink>
                  {/* </NavigationMenuContent> */}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
    </nav>
  )
}

export default NavMenu