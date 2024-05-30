import React, { useContext, useEffect } from "react";
import Drawer from "./Drawer";
import { appContext } from "@/context/ContextProvider";
import { FaMoon } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  const { state }: any = useContext(appContext);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div
      className={`navbar w-full md:max-w-[50rem] navbar-floating transition-all duration-500 ease-in-out ${state.color} bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-black
      `}
    >
      <div className="navbar-start">
        <a
          className={`navbar-item text-lg md:text-xl ${
            state.dark ? "text-white" : "text-black"
          }`}
        >
          <FaMoon />
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown-container ">
          <Drawer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
