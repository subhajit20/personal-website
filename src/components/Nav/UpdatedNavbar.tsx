import React, { useContext } from "react";
import { FaEnvelope, FaGithub, FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { appContext } from "@/context/ContextProvider";
import { FaBars, FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function UpdatedNavbar() {
  const { state,dispatch }: any = useContext(appContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 bg-black fixed w-full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=""
        />
        <NavbarBrand>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex cursor-pointer">
          {
            state.dark === true && <GoSun onClick={()=> dispatch({type:"LIGHT"})} className="h-7 w-7 text-white" />
          }
          {
            state.light === true && <FaMoon onClick={()=> dispatch({type:"DARK"})} className="h-7 w-7 text-black" />
          }
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 bg-black ">
      <div className="drawer-content pt-10 flex flex-col justify-center items-start gap-y-10 h-full">
            <NavbarMenuItem >
              <Link
                className="w-full"
                href="mailto:subhajitstd07@gmail.com"
                target="_blank"
                size="lg"
                >
              <FaEnvelope className={`h-11 w-11 text-white`} />
            </Link>
            </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="https://github.com/subhajit20"
              className=" text-black"
              target="_blank"
            >
              <FaGithub className={`h-11 w-11 text-white`} />
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="https://twitter.com/Subhajit812"
              className=" text-black"
              target="_blank"
            >
              <FaXTwitter className={`h-11 w-11 text-white`} />
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="https://www.linkedin.com/in/subhajit-ghosh-6a1aba218/"
              className=" text-black"
              target="_blank"
            >
              <CiLinkedin className={`h-11 w-11 text-white`} />
            </Link>
          </NavbarMenuItem>
          
          <NavbarMenuItem>
            <Link href="https://www.instagram.com/engiexplorer/" className=" text-black" target="_blank">
              <LuInstagram className={`h-11 w-11 text-white`} />
            </Link>
          </NavbarMenuItem>
          </div>
      </NavbarMenu>
    </Navbar>
  );
}
