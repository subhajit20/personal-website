import React from "react";
import Image from "next/image";
import { ImageType } from "@/types/image";

const Avatar = (props: ImageType) => {
  return (
    <div className="rounded-full ring-2">
      <Image
        src={props.image}
        className="rounded-full"
        alt={props.alt || ""}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default Avatar;
