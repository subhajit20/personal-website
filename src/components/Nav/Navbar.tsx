import React from "react";
import Drawer from "./Drawer";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar rounded-lg bg-white">
      <div className="navbar-start">
        <a className="navbar-item text-lg md:text-xl text-blue-950">
          Subhajit Ghosh
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown-container bg-white text-black">
          <Drawer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
