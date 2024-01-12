import Image, { StaticImageData } from "next/image";
import { ImageType } from "@/types/image";
import React from "react";

const BannerImage = (props: ImageType) => {
  return (
    <Image
      src={props.image}
      alt={props.alt || ""}
      height={props.height}
      width={props.width}
    />
  );
};

export default BannerImage;
