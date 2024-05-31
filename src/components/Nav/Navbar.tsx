import React, { useContext } from "react";
import Drawer from "./Drawer";
import { appContext } from "@/context/ContextProvider";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

type Props = {};

const Navbar = (props: Props) => {
  const { state,dispatch }: any = useContext(appContext);

  return (
    <div className={`navbar navbar-floating rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border bg-black border-gray-600`}>
      <div className="navbar-start">
        <a className="navbar-item">
          {
            state.dark === true && <GoSun onClick={()=> dispatch({type:"LIGHT"})} className="h-7 w-7 text-white" />
          }
          {
            state.light === true && <FaMoon onClick={()=> dispatch({type:"DARK"})} className="h-7 w-7 text-black" />
          }
        </a>
      </div>
      <div className="navbar-end">
        <Drawer />
      </div>
    </div>
  );
};

export default Navbar;
