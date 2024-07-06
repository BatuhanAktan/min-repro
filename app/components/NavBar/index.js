import React from "react";
import NavbarButton from "./navbarButton";

export const dynamic = "force-dynamic";

const NavBar = async () => {
  return (
    <nav className="flex justify-between items-center px-[10%] py-12 md:px-10 md:py-7 w-full text-[white]">
      <h1 className="z-30">Server List</h1>
      <div
        className="flex justify-center items-center md:items-start md:justify-normal md:bg-neutral-900 md:absolute md:pt-20 md:top-0 md:min-h-full md:w-full md:duration-300 md:left-[-100%] md:flex-col"
        id="navbar"
      >
        <a href="/" className="ml-8 text-[white] no-underline">
          Home
        </a>
        <a href="/dashboard" className="ml-8 text-[white] no-underline">
          Manage Servers
        </a>
        <a href="/dashboard" className="ml-8 text-[white] no-underline">
          Discord server
        </a>
        <div className="flex md:absolute md:bottom-8 items-center ml-8">
          <button className="text-[white] bg-blue-500 px-4 py-2 rounded">
            Login
          </button>
        </div>
      </div>
      <NavbarButton />
    </nav>
  );
};

export default NavBar;
