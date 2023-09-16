"use server";

import cloudinary from "cloudinary";

export const Setfavorite = async (publicId: string, fav: boolean) => {
  if (fav) {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  }
};
