import React, { useContext } from "react";
import Drawer from "./Drawer";
import { appContext } from "@/context/ContextProvider";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

type Props = {};

const Navbar = (props: Props) => {
  const { state,dispatch }: any = useContext(appContext);

  return (
    <div className={`navbar navbar-sticky backdrop-blur-md backdrop-filter`}>
      <div className="navbar-start">
        <a className="navbar-item">
          {
            state.dark === true && <GoSun onClick={()=> dispatch({type:"LIGHT"})} className="h-7 w-7" />
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
