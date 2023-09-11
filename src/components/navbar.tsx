"use client"
import React from 'react'
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
        <Button asChild>
            <div className='flex items-center gap-1'>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
</svg>

    <CldUploadButton uploadPreset="cysotgm6" onUpload={()=>{
        
    }} />
            </div>
        </Button>
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