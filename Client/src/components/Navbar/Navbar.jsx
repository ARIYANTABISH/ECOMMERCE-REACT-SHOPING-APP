import React, { useState } from "react";
import NavLinks from "./NavLinks";
import "./Navbar.css";
import Search from "../Topbar/Search";
import { links } from "./Mylinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <nav className="bg-white mt-1 nav_serach">
      <div className="flex items-center font-medium justify-center mr-7 h-14 ">
        <div className="z-50 md:w-auto w-full cros flex justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className=" md:flex hidden  items-center font-family:  font-sans-serif  ">
          <NavLinks  key={links.id}/>
        </ul>

        {/* Mobile nav */}
        <ul key={links.id}
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
        </ul>
        <Search />
      </div>
    </nav>
     
    </>
  );
};

export default Navbar;
