import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Menu } from "lucide-react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <nav className="bg-black/80 flex justify-between h-[3rem] p-8 items-center cursor-pointer">
      <div className="flex items-center gap-3">
        <img
          src="https://res.cloudinary.com/dgqyobxzg/image/upload/v1743534167/samples/Asset_2_3x_vsohgu.png"
          alt="logo"
          className="w-6"
        />
        <p className="hidden md:block text-white font-semibold text-xl italic">
          The Cozy Corner
        </p>
      </div>

      <div>
        <Menu
          size={24}
          weight="bold"
          className="md:hidden block text-blanchdiamond"
          onClick={handleHidden}
        />
      </div>

      <ul className="md:flex items-center gap-[1rem] text-white font-semibold hidden">
        <Link to={"/"} className="cursor-pointer hover:text-white transition duration-150 hover:border-b-1 hover:border-b-white">
          Home
        </Link>
        <Link to={"/services"} className="cursor-pointer hover:text-white transition duration-150 hover:border-b-1 hover:border-b-white">
          Services
        </Link>
        <Link to={"/about"} className="cursor-pointer hover:text-white transition duration-150 hover:border-b-1 hover:border-b-white">
          About
        </Link>
        <Link to={"/contact"} className="cursor-pointer hover:text-white transition duration-150 hover:border-b-1 hover:border-b-white">
          Contact
        </Link>
      </ul>

      {hidden && (
        <div className="h-fit w-29 bg-white text-black absolute right-0 p-1 top-12">
          <ul className="font-semibold space-y-6">
            <Link to={"/"} className="px-3 cursor-pointer hover:border-b-white hover:border-b-1 w-max transition duration-150">
              Home
            </Link>
            <Link to={"/services"} className="px-3 cursor-pointer hover:border-b-white hover:border-b-1 w-max transition duration-150">
              Services
            </Link>
            <Link to={"/about"} className="px-3 cursor-pointer hover:border-b-white hover:border-b-1 w-max transition duration-150">
              About
            </Link>
            <Link to={"/contact"} className="px-3 cursor-pointer hover:border-b-white hover:border-b-1 w-max transition duration-150">
              Contact
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
