"use server "
import React from 'react'
import  cloudinary  from 'cloudinary';
import Gallerygrid from './gallery-grid';

const Main =async () => {
    const results = (await cloudinary.v2.search
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(30)
        .execute()) ;
        console.log(results)
  return (
<>

<div>
    <Gallerygrid resourses={results.resourses} />
</div>


</>
  )
}

export default Main