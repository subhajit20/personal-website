import React from "react";
import Drawer from "./Drawer";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar rounded-lg">
      <div className="navbar-start">
        <a className="navbar-item text-xl">Subhajit Ghosh</a>
      </div>
      <div className="navbar-end">
        <div className="avatar avatar-ring avatar-md">
          <div className="dropdown-container">
            <Drawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
