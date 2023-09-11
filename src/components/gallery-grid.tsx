"use client"
import { CldImage } from 'next-cloudinary'
import React from 'react'

const Gallerygrid = ({resourses}:any) => {
  return (
    <>
    
    <div>
 
<CldImage
  width="960"
  height="600"
  src={resourses}
  sizes="100vw"
  alt="Description of my image"
/>
</div>
    
    </>
  )
}

export default Gallerygrid