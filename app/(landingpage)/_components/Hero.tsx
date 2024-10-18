import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center py-32 px-5 text-center space-y-3'>
        <h2 className='text-sm font-medium'>
            welcome to storycareer
        </h2>
        <h1 className='text-3xl md:text-5xl font-bold max-m-2xl'>
        Discover and share Inspiring Career Journeys
        </h1>
       <p className='max-w-lg text-muted-foreground'>
         storycareer is a unique platform where individuels from all walks of life  can share 
         theire Career stories ,challenges and successes , whether you're just starting out .
         </p>
         <Link href='/stories'>
         <Button>
             Discover people stories
         </Button>
         </Link>
         <Image src='/reading.svg' 
         alt='reading'
         width={500} 
         height={500}/>
    </section>
  )
}

export default Hero