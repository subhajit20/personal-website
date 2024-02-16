"use client";
import React, { useContext, useEffect } from "react";
import Bars from "../ui/Icons/self_made_icon/Bars";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  SunIcon,
  MoonIcon,
} from "@radix-ui/react-icons";
import { WhiteX } from "../ui/Icons/self_made_icon/XIcon";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import useChangeTheme from "@/hooks/useChangeTheme";
import { appContext } from "@/context/ContextProvider";

type Props = {};

const Drawer = (props: Props) => {
  const { changeTheme } = useChangeTheme();
  const { state }: any = useContext(appContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="dropdown">
      <input type="checkbox" id="drawer-left" className="drawer-toggle" />

      <label
        htmlFor="drawer-left"
        className={`btn flex justify-center md:hidden bg-transparent`}
      >
        <Bars color={state.self_Madeicon} />
      </label>
      <label
        className={`btn hidden md:flex justify-center justify-self-end bg-transparent`}
      >
        {state.dark && (
          <SunIcon
            className={`${state.iconColor} scale-[1.5]`}
            onClick={changeTheme}
          />
        )}
        {state.light && (
          <MoonIcon
            className={`${state.iconColor} text-black scale-[2]`}
            onClick={changeTheme}
          />
        )}
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
              {state.dark && (
                <SunIcon
                  className="text-white scale-[2]"
                  onClick={changeTheme}
                />
              )}
              {state.light && (
                <MoonIcon
                  className="text-white scale-[2]"
                  onClick={changeTheme}
                />
              )}
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
