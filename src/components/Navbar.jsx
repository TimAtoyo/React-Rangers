// import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";
import Capture from "../assets/Capture.png";
function Navbar() {
  return (
    <header>
      <nav className="nav m-auto flex items-center flex-wrap h-20 px-10 shadow-lg">
        <div className="relative max-w-sm transition-all duration-300 cursor-pointer ">
          <Link to="/" className="relative">
            <img src={Capture} className="object-contain h-fit w-20" alt="" />
          </Link>
        </div>
        <div className="cursor-pointer transition-all duration-300 font-bold">
          <Link to="/Filters">
            SEARCH BY FILTERS
          </Link>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navbar;
