import React from 'react'
import cloudinary from "cloudinary";

 import Uploadbtn from '@/components/Uploadbtn';
import Gallerygrid, { GallerygridProps } from '@/components/gallery-grid';

const Gallery = async() => {
    const results = (await cloudinary.v2.search
        .expression("resource_type:image").with_field("tags")
        .sort_by("public_id", "desc").max_results(22)
        .execute()) as { resources: GallerygridProps[] };
        console.log('results.resources', results.resources)
  return (
    <>
       <Uploadbtn />
      <Gallerygrid images={results.resources} />
    
    
    </>
  )
}

export default Gallery