"use client"

import { Story } from '@prisma/client'
"use client"

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

interface Props {
    initialData : Story
}

const formSchema = z.object({
    title: z.string().min(2, {
      message: "title is required.",
    }).max(500),
  })


const TitleForm = ({initialData}:Props ) => {
    const router = useRouter()
   const [isEditing,setIsEditing] = useState(false)
   const [isSubmtting,setIsSubmtting] = useState(false)
   const toggleEdit =()=> setIsEditing((current )=> !current)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
        },
      })

  return (
    <div className='border border-secondary rounded-md p-4 bg-secondary w-80 ' >
        <div className='flex items-center justify-between font-medium text-primary '>
               Title 
               <Button >
                
               </Button>
        </div>
        </div>
  )
}

export default TitleForm