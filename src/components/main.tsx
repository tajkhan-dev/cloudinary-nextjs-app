import React from "react";
import cloudinary from "cloudinary";
import Gallerygrid, { GallerygridProps } from "./gallery-grid";
import Uploadbtn from "./Uploadbtn";

const Main = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc").max_results(20)
    .execute()) as { resources: GallerygridProps[] };

  return (
    <>
      <Uploadbtn />
      <Gallerygrid images={results.resources} />
    </>
  );
};

export default Main;
