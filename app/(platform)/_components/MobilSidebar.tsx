"use client"

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu , LayoutDashboard , Book,Heart, Import} from 'lucide-react'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const SidebarLinks =[ 
    {
        label :"My stories",
        href :"/story",
        icon : Book
    },
    {   label :"My saves",
        href :"/saves",
        icon : Book 
    }
 ]



const MobilSidebar = () => {

    const pathname = usePathname()
  return (
    <Sheet>
    <SheetTrigger className='md:hidden block'>
        <Menu className='h-6 w-6'/>
    </SheetTrigger>
    <SheetContent className='p-12 space-y-2' side={'left'}>
      {
        SidebarLinks.map(({label ,href,icon:Icon})=>(
           <Link className={
            cn("h-10 px-4 py-2 flrx items-center gap-x-2 text-ms hover:bg-primary rounded-md transition-colors duration-200 font-medium ",
                pathname.startsWith(href) &&
             "bg-primary text-primary-foreground  font-semibold"         )
           }
           key={href}
            href={href}>
            <Icon className='h-5 w-5' />
            {
                label
            }
           </Link>
        ))
      }
    </SheetContent>
  </Sheet>
  
  )
}

export default MobilSidebar