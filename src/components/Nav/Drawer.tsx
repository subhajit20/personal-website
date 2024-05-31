// "use client";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";
import { FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import useChangeTheme from "@/hooks/useChangeTheme";
import { appContext } from "@/context/ContextProvider";

type Props = {};

const Drawer = (props: Props) => {
  const { changeTheme } = useChangeTheme();
  const { state }: any = useContext(appContext);

  return (
    <><input type="checkbox" id="drawer-left" className="drawer-toggle" /><label htmlFor="drawer-left" className="text-black"><FaBars className={state.navicon} /></label><label className="overlay" htmlFor="drawer-left"></label><div className="drawer">
      <div className="drawer-content pt-10 flex flex-col justify-center items-start gap-y-10 h-full">
        <label htmlFor="drawer-left" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
        {/* <div className={``}> */}
          <a
            href="mailto:subhajitstd07@gmail.com"
            className="text-black"
            target="_blank"
          >
            <FaEnvelope className={`h-11 w-11 text-white`} />
          </a>
          <a
            href="https://github.com/subhajit20"
            className=" text-black"
            target="_blank"
          >
            <FaGithub className={`h-11 w-11 text-white`} />
          </a>
          <a
            href="https://twitter.com/Subhajit812"
            className=" text-black"
            target="_blank"
          >
            <FaXTwitter className={`h-11 w-11 text-white`} />
          </a>
          <a
            href="https://www.linkedin.com/in/subhajit-ghosh-6a1aba218/"
            className=" text-black"
            target="_blank"
          >
            <CiLinkedin className={`h-11 w-11 text-white`} />
          </a>
          <a href="https://www.instagram.com/engiexplorer/" className=" text-black" target="_blank">
            <LuInstagram className={`h-11 w-11 text-white`} />
          </a>
        {/* </div> */}
      </div>
    </div></>
  );
};

export default Drawer;
