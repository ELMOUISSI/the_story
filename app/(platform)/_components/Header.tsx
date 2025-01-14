"use client"

import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { ModeToggle } from '@/components/modeToggle'
import MobilSidebar from './MobilSidebar'


const Header = () => {
    const {user}= useUser()
    if(!user) return null
  return (
    <header className='flex py-5 items-center justify-between m-full '>
      <h1 className='font-medium md:block hidden'>
        Welcome back , {user?.fullName}
      </h1>
      <MobilSidebar/>

      <div className="flex items-center gap-x-2 ">
        <Link href={"/"}>
        <Button variant={'ghost'}>
          <ArrowLeft className='text-muted-foreground h-5 w-5 mr-2'>
            <span className='md:block hidden'>
                Back to Home Page 
            </span>
               
          </ArrowLeft>
        </Button>
        </Link>
        <ModeToggle/>
        <UserButton afterSignOutUrl='/'/>
        
      </div>



    </header>
  )
}

export default Header