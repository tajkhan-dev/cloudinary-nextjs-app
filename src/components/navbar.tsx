"use client"
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { CldUploadButton } from 'next-cloudinary'
import { Button } from './ui/button'

const Navbar = () => {
  
  return (
   <>
   
   <div className=" flex justify-between items-center">
   <h1>
     CLoudinary Photo App
     </h1>
    <div className='flex gap-5'>
       
   <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

    </div>

    

   </div>
   
   </>
  )
}

export default Navbar