import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import AuthModal from "./AuthModal";

const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT US", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");

  const handleAuthOpen = (type) => {
    setAuthType(type);
    setAuthModalOpen(true);
  };

  return (
    <div className=" w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between bg-transparent py-4 px-6 md:px-10 relative">
        {/* Logo section */}
        <div className="w-60 flex-shrink-0 cursor-pointer flex items-center gap-2">
          <img src="logo-job-updates.png" alt="logo" />
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-1 flex justify-start mx-20">
          <ul className="md:flex hidden gap-10 items-center text-gray-300 font-medium tracking-wide">
            {Links.map((link, index) => (
             <li
             key={index}
             className="hover:text-white transition-colors duration-300 uppercase relative pb-1"
           >
             <a
               href={link.link}
               className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#FFDE4D] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
             >
               {link.name}
             </a>
           </li>
           
            ))}
          </ul>
        </div>

        {/* Right side login/register */}
        <div className="hidden md:flex items-center gap-4">
          <span
            className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 uppercase font-medium"
            onClick={() => handleAuthOpen("login")}
          >
            LOGIN
          </span>
          <button
            className="bg-gray-800 hover:bg-[#FFDE4D] transition-all duration-300 text-white font-semibold px-4 py-2 rounded-md tracking-wider shadow-md"
            onClick={() => handleAuthOpen("register")}
          >
            Register
          </button>
        </div>

        {/* Mobile menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-6 top-6 cursor-pointer md:hidden w-7 h-7 text-gray-100"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden bg-[#111] w-full px-9 pt-4 pb-6 transition-all duration-500 ease-in ${
          open ? "block" : "hidden"
        }`}
      >
        {Links.map((link, index) => (
          <li
            key={index}
            className="my-4 text-gray-300 hover:text-white uppercase font-medium"
          >
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
        <li
          className="my-4 text-gray-300 hover:text-white uppercase font-medium cursor-pointer"
          onClick={() => handleAuthOpen("login")}
        >
          LOGIN
        </li>
        <button
          className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-white font-semibold px-4 py-2 rounded-md tracking-wider shadow-md w-full text-left"
          onClick={() => handleAuthOpen("register")}
        >
          Register
        </button>
      </ul>

      {/* Auth Modal */}
      <AuthModal
        open={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
        type={authType}
      />
    </div>
  );
};

export default Header;
