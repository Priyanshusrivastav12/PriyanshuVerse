import React, { useState } from "react";
import pic from "../../public/Profile.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experiance" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Name */}
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Priyansh<span className="text-green-500 text-2xl">u</span> Srivasta
              <span className="text-green-500 text-2xl">v</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="cursor-pointer relative group text-gray-700 hover:text-green-600 transition duration-300"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-green-600"
                  >
                    {text}
                  </Link>
                  {/* Underline Effect */}
                  <div className="absolute left-0 w-full h-[2px] bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-5 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="cursor-pointer font-semibold text-gray-700 hover:text-green-600 transition duration-300"
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-green-600"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
