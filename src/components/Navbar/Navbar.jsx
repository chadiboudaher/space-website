import React from "react";
import Logo from "../../assets/icons8-space-50.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 px-10">
      <div className="flex w-full justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-white gap-4 font-bold text-2xl">
          <img src={Logo} alt="logo" className="w-10" />
          <span>TCJ-SPACE</span>
        </div>

        {/* Menu + Button */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 text-xl text-white">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Galaxy</a>
            </li>
            <li>
              <a href="#">Satellite</a>
            </li>
          </ul>

          <button className="text-white border-2 border-white px-3 py-1 rounded-md">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
