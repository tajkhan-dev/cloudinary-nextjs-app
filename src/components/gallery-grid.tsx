
import React from 'react'
import Images from "./Images";
export interface GallerygridProps {
  public_id: string;
  tags: string[];
}
const Gallerygrid = ({ images }: { images: GallerygridProps[] }) => {
  return (
    <>
      <div className='grid grid-cols-4 gap-4'>
        {images.map((imageData) => (
          <Images imageData={imageData} />
        ))}
      </div>
    </>
  );
};

export default Gallerygrid;
