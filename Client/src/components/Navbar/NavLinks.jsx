import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import '../Navbar/Navbar.css'
import './Navbar'
const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index.id}>
          <div className="px-1 text-left md:cursor-pointer group">
            
            <h1  key={index.id}
              className="mobile_res_ul py-4 flex justify-start items-center md:pr-6 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}  >
              <div className="side_res_img"></div>
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              
            </h1>
            {link.submenu && (
              <div>
                <div className=" absolute hidden group-hover:md:block hover:md:block">
                  <div className="py-1">
                    <div
                      className=" w-9 h-2 left-5 absolute 
                      bg-white rotate-45"
                    ></div>
                  </div>
                  <div 
                   className="item-model  gap-5 "
                   >
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index.id}>
                        <h1 className="hh1 " style={{textDecoration:'dashed'}} key={links.id} >
                          {mysublinks.Head}
                          
                        </h1>
                        {mysublinks.sublink.map((slink, index ) => (
                          <li className="li "  key={index.id} >          
                            <Link 
                              to={slink.link}
                              className=" hover:text-primary "
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1 
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div 
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;