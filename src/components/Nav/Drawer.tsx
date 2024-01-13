import React from "react";
import Bars from "../ui/Icons/self_made_icon/Bars";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import XIcon, { WhiteX } from "../ui/Icons/self_made_icon/XIcon";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/16/solid";

type Props = {};

const Drawer = (props: Props) => {
  return (
    <div className="dropdown">
      <input type="checkbox" id="drawer-left" className="drawer-toggle" />

      <label htmlFor="drawer-left" className="btn block md:hidden">
        <Bars />
      </label>
      <label className="btn hidden md:block justify-self-end">
        <SunIcon className="text-black scale-[1.5]" />
      </label>
      <label className="overlay" htmlFor="drawer-left"></label>
      <div className="drawer">
        <div className="drawer-content pt-10 flex flex-col h-full">
          <label
            htmlFor="drawer-left"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="grid grid-cols-1 gap-y-10 ">
            <a
              href="mailto:subhajitstd07@gmail.com"
              className="text-white flex gap-x-6 text-xl items-center"
              target="_blank"
            >
              <EnvelopeIcon className="h-4 w-4 scale-[1.8] " /> Email
            </a>
            <a
              href="https://github.com/subhajit20"
              className="text-white flex gap-x-6 text-xl items-center"
              target="_blank"
            >
              <GitHubLogoIcon className="scale-[1.7]" /> GitHub
            </a>
            <a
              href="https://twitter.com/Subhajit812"
              className="text-white flex gap-x-6 text-xl items-center"
              target="_blank"
            >
              <WhiteX /> Twitter X
            </a>
            <a
              href="https://www.linkedin.com/in/subhajit-ghosh-6a1aba218/"
              className="text-white flex gap-x-6 text-xl items-center"
              target="_blank"
            >
              <LinkedInLogoIcon className="scale-[1.7]" /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/halfprettify/"
              className=" text-white flex gap-x-6 text-xl items-center"
              target="_blank"
            >
              <InstagramLogoIcon className="scale-[1.7]" /> Instagram
            </a>
            <button className="btn justify-self-start">
              <SunIcon className="scale-[2]" />
            </button>
            ​
          </div>
        </div>
      </div>
      <label className="overlay" htmlFor="drawer-left"></label>
    </div>
  );
};

export default Drawer;
