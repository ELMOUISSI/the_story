"use client"

import { Story } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Pencil } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Story>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({row })=>{
        const getDate = row.getValue(" createdAt") as Date
        return(
            <div>
                {
                    getDate.toDateString()
                }
            </div>
        )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const story = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
             
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
          
           
            <DropdownMenuItem>
                <Link href={`/story/${story.id}`} className="w-full flex items-center gap-x-2">
                <Pencil className="h-5 w-5 "/>
                Edit
                </Link>
            </DropdownMenuItem>
           
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


import React from 'react'

function colunns() {
  return (
    <div>colunns</div>
  )
}

export default colunns