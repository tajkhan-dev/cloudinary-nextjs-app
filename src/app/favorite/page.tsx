import React from 'react'
import cloudinary from 'cloudinary'
import Gallerygrid, { GallerygridProps } from '@/components/gallery-grid';

const page = async() => {
    const results = (await cloudinary.v2.search
        .expression("resource_type:image AND tags=favorite").with_field("tags")
        .sort_by("public_id", "desc").max_results(22)
        .execute()) as { resources: GallerygridProps[] };
        console.log('results.resources', results.resources)
  return (
    <>
    
    <Gallerygrid images={results.resources} />
    </>
  )
}

export default page