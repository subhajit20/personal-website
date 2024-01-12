import React from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import XIcon from "./self_made_icon/XIcon";

type Props = {};

const IconLine = (props: Props) => {
  return (
    <div className="flex justify-center gap-x-8 py-4">
      <a
        href="mailto:subhajitstd07@gmail.com"
        className="text-black"
        target="_blank"
      >
        <EnvelopeIcon className="h-4 w-4 scale-[1.8] text-black" />
      </a>
      <a
        href="https://github.com/subhajit20"
        className="scale-[1.7] text-black"
        target="_blank"
      >
        <GitHubLogoIcon />
      </a>
      <a
        href="https://twitter.com/Subhajit812"
        className="scale-[1.7] text-black"
        target="_blank"
      >
        <XIcon />
        {/* <TwitterLogoIcon /> */}
      </a>
      <a
        href="https://www.linkedin.com/in/subhajit-ghosh-6a1aba218/"
        className="scale-[1.7] text-black"
        target="_blank"
      >
        <LinkedInLogoIcon />
      </a>
      <a href="" className="scale-[1.7] text-black" target="_blank">
        <InstagramLogoIcon />
      </a>
    </div>
  );
};

export default IconLine;
