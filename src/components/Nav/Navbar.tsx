import React, { useContext, useEffect } from "react";
import Drawer from "./Drawer";
import { appContext } from "@/context/ContextProvider";

type Props = {};

const Navbar = (props: Props) => {
  const { state }: any = useContext(appContext);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div
      className={`navbar transition-all duration-500 ease-in-out ${state.color}`}
    >
      <div className="navbar-start">
        <a
          className={`navbar-item text-lg md:text-xl ${
            state.dark ? "text-white" : "text-black"
          }`}
        >
          Subhajit Ghosh
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
