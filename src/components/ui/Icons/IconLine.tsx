import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";
import { FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { appContext } from "@/context/ContextProvider";

type Props = {};

const IconLine = (props: Props) => {
  const { state }: any = React.useContext(appContext);
  return (
    <div className={`flex justify-center gap-x-8 py-4`}>
      <a
        href="mailto:subhajitstd07@gmail.com"
        className="text-black"
        target="_blank"
      >
        <FaEnvelope className={`h-7 w-7 ${state.iconColor}`} />
      </a>
      <a
        href="https://github.com/subhajit20"
        className=" text-black"
        target="_blank"
      >
        <FaGithub className={`h-7 w-7 ${state.iconColor}`} />
      </a>
      <a
        href="https://twitter.com/Subhajit812"
        className=" text-black"
        target="_blank"
      >
        <FaXTwitter className={`h-7 w-7 ${state.iconColor}`} />
      </a>
      <a
        href="https://www.linkedin.com/in/subhajit-ghosh-6a1aba218/"
        className=" text-black"
        target="_blank"
      >
        <CiLinkedin className={`h-7 w-7 ${state.iconColor}`} />
      </a>
      <a href="https://www.instagram.com/engiexplorer/" className=" text-black" target="_blank">
        <LuInstagram className={`h-7 w-7 ${state.iconColor}`} />
      </a>
    </div>
  );
};

export default IconLine;
