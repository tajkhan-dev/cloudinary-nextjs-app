"use client"
import { CldImage } from 'next-cloudinary'
import React from 'react'
 export interface GallerygridProps {
  public_id: string;
  tags:string[]
}
const Gallerygrid = ({images}:{images:GallerygridProps[]}) => {
  console.log('images', images[0]?.public_id)

  return (
    <>
    
    <div className='grid grid-cols-4 gap-4'>
 {
images.map((i,index)=>(
<div >

<CldImage
  width="400"
  height="300"
  key={i.public_id}
  src={i.public_id}
  sizes="100vw"
  alt="Description of my image"
/>
  </div>
  ))
 }
</div>
    
    </>
  )
}

export default Gallerygrid