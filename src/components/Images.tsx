"use client";
import React, { useTransition, useState, useEffect } from "react";
import { Setfavorite } from "./action";
import { GallerygridProps } from "./gallery-grid";
import { CldImage } from "next-cloudinary";

import { useRouter } from "next/navigation";

const Images = ({ imageData }: { imageData: GallerygridProps }) => {
  const [fav, setfav] = useState(imageData.tags.includes("favorite"));
  const [transition, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [fav]);
  return (
    <>
       <div className='relative'>
        <svg
          onClick={() => {
            setfav((prev) => !prev);

            startTransition(() => {
              Setfavorite(imageData.public_id, fav);
            });
          }}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className={
            fav
              ? `w-6 h-6 absolute cursor-pointer text-red-500`
              : "`w-6 h-6 absolute cursor-pointer"
          }
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
          />
        </svg>

        <CldImage
          width='400'
          height='300'
          key={imageData.public_id}
          src={imageData.public_id}
          sizes='100vw'
          alt='Description of my image'
        />
      </div>
    </>
  );
};

export default Images;
