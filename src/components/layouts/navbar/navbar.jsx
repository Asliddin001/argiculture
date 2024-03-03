import React from "react";
import { NavLink } from "react-router-dom";
import { CartIcon, Input, Logo, SearchIcon } from "../../common";

export const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="text-white">
          <Logo />
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink className="text-[20px] text-Arapawa font-bold" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[20px] text-Arapawa font-bold" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[20px] text-Arapawa font-bold"
              to="/Pages "
            >
              Pages 
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[20px] text-Arapawa font-bold" to="/shop">
              shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[20px] text-Arapawa font-bold"
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[20px] text-Arapawa font-bold" to="/news">
              News
            </NavLink>
          </li>
        </ul>
        <div className="inputs flex flex-row ">
          <Input
            type="text"
            placeholder=""
            icon={<SearchIcon />}
            large={false}
          />
          <div className="w-[160px] border-solid border-[1px] border-drwhite-1 rounded-full py-[5px] px-[5px] flex items-center gap-[12px]">
            <CartIcon />
            <span className="text-[18px] font-semibold text-Arapawa">
              Cart (0)
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
